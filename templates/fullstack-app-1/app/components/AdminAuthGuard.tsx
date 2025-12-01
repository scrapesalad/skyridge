"use client";

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

interface AdminAuthGuardProps {
	children: React.ReactNode;
}

export default function AdminAuthGuard({ children }: AdminAuthGuardProps) {
	const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
	const [isLoading, setIsLoading] = useState(true);
	const router = useRouter();

	useEffect(() => {
		const checkAuth = async () => {
			try {
				const response = await fetch('/api/admin/verify', {
					credentials: 'include',
					cache: 'no-store',
				});

				if (response.ok) {
					const data = await response.json();
					if (data.authenticated) {
						setIsAuthenticated(true);
					} else {
						setIsAuthenticated(false);
					}
				} else {
					setIsAuthenticated(false);
				}
			} catch (error) {
				console.error('Auth check failed:', error);
				setIsAuthenticated(false);
			} finally {
				setIsLoading(false);
			}
		};

		checkAuth();
	}, []);

	if (isLoading) {
		return (
			<div className="min-h-screen bg-gray-50 flex items-center justify-center">
				<div className="text-center">
					<div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#0d9488] mx-auto mb-4"></div>
					<p className="text-gray-600">Checking authentication...</p>
				</div>
			</div>
		);
	}

	if (!isAuthenticated) {
		return <AdminLogin onSuccess={() => setIsAuthenticated(true)} />;
	}

	return <>{children}</>;
}

function AdminLogin({ onSuccess }: { onSuccess: () => void }) {
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');
	const [loading, setLoading] = useState(false);
	const [blocked, setBlocked] = useState(false);
	const [remainingMs, setRemainingMs] = useState(0);

	useEffect(() => {
		const checkBlocked = async () => {
			try {
				const response = await fetch('/api/admin/login', {
					credentials: 'include',
				});
				const data = await response.json();
				if (data.blocked) {
					setBlocked(true);
					setRemainingMs(data.remainingMs || 0);
				}
			} catch (error) {
				console.error('Failed to check block status:', error);
			}
		};
		checkBlocked();
	}, []);

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setError('');
		setLoading(true);

		try {
			const response = await fetch('/api/admin/login', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				credentials: 'include',
				body: JSON.stringify({ password }),
			});

			const data = await response.json();

			if (data.ok) {
				onSuccess();
			} else {
				setError(data.error || 'Invalid password');
				if (data.retryAfterMs) {
					setBlocked(true);
					setRemainingMs(data.retryAfterMs);
				}
			}
		} catch (error) {
			setError('Login failed. Please try again.');
		} finally {
			setLoading(false);
		}
	};

	const formatTime = (ms: number) => {
		const minutes = Math.floor(ms / 60000);
		const seconds = Math.floor((ms % 60000) / 1000);
		return `${minutes}:${seconds.toString().padStart(2, '0')}`;
	};

	return (
		<div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
			<div className="max-w-md w-full space-y-8">
				<div>
					<h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
						Admin Login
					</h2>
					<p className="mt-2 text-center text-sm text-gray-600">
						Email Outreach Tool
					</p>
				</div>
				<form className="mt-8 space-y-6" onSubmit={handleSubmit}>
					<div className="rounded-md shadow-sm -space-y-px">
						<div>
							<label htmlFor="password" className="sr-only">
								Password
							</label>
							<input
								id="password"
								name="password"
								type="password"
								required
								className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-[#0d9488] focus:border-[#0d9488] focus:z-10 sm:text-sm"
								placeholder="Enter admin password"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
								disabled={blocked || loading}
							/>
						</div>
					</div>

					{error && (
						<div className="rounded-md bg-red-50 p-4">
							<div className="flex">
								<div className="ml-3">
									<h3 className="text-sm font-medium text-red-800">
										{error}
									</h3>
								</div>
							</div>
						</div>
					)}

					{blocked && (
						<div className="rounded-md bg-yellow-50 p-4">
							<div className="flex">
								<div className="ml-3">
									<h3 className="text-sm font-medium text-yellow-800">
										Too many login attempts. Please try again in {formatTime(remainingMs)}.
									</h3>
								</div>
							</div>
						</div>
					)}

					<div>
						<button
							type="submit"
							disabled={blocked || loading}
							className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#0d9488] hover:bg-[#3d2d8a] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0d9488] disabled:opacity-50 disabled:cursor-not-allowed"
						>
							{loading ? 'Logging in...' : 'Sign in'}
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}
