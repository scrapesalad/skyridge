<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:s="http://www.sitemaps.org/schemas/sitemap/0.9"
  xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">

  <xsl:output method="html" encoding="UTF-8" indent="yes"/>

  <xsl:template match="/">
    <html>
      <head>
        <title>XML Sitemap</title>
        <meta name="robots" content="noindex"/>
        <style type="text/css">
          body{font-family:system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif;margin:24px;color:#111}
          h1{font-size:28px;margin:0 0 12px 0}
          p{margin:0 0 16px 0;color:#444;max-width:72ch}
          table{border-collapse:collapse;width:100%;max-width:1100px}
          th,td{border:1px solid #e5e5e5;padding:10px;vertical-align:top}
          th{background:#f7f7f7;text-align:left}
          a{color:#0b5bd3;text-decoration:none}
          a:hover{text-decoration:underline}
          .muted{color:#666}
        </style>
      </head>
      <body>
        <h1>XML Sitemap</h1>
        <p class="muted">
          This is an XML Sitemap, meant for consumption by search engines. It&apos;s also formatted for easy viewing in a browser.
        </p>

        <xsl:choose>
          <xsl:when test="s:sitemapindex">
            <p>
              This sitemap index contains <xsl:value-of select="count(s:sitemapindex/s:sitemap)"/> sitemaps.
            </p>
            <table>
              <thead>
                <tr>
                  <th>Sitemap</th>
                  <th>Last Modified</th>
                </tr>
              </thead>
              <tbody>
                <xsl:for-each select="s:sitemapindex/s:sitemap">
                  <tr>
                    <td>
                      <a>
                        <xsl:attribute name="href">
                          <xsl:value-of select="s:loc"/>
                        </xsl:attribute>
                        <xsl:value-of select="s:loc"/>
                      </a>
                    </td>
                    <td><xsl:value-of select="s:lastmod"/></td>
                  </tr>
                </xsl:for-each>
              </tbody>
            </table>
          </xsl:when>

          <xsl:when test="s:urlset">
            <p>
              This sitemap contains <xsl:value-of select="count(s:urlset/s:url)"/> URLs.
            </p>
            <table>
              <thead>
                <tr>
                  <th>URL</th>
                  <th>Images</th>
                  <th>Last Modified</th>
                </tr>
              </thead>
              <tbody>
                <xsl:for-each select="s:urlset/s:url">
                  <tr>
                    <td>
                      <a>
                        <xsl:attribute name="href">
                          <xsl:value-of select="s:loc"/>
                        </xsl:attribute>
                        <xsl:value-of select="s:loc"/>
                      </a>
                    </td>
                    <td><xsl:value-of select="count(image:image)"/></td>
                    <td><xsl:value-of select="s:lastmod"/></td>
                  </tr>
                </xsl:for-each>
              </tbody>
            </table>
          </xsl:when>

          <xsl:otherwise>
            <p>Unrecognized sitemap format.</p>
          </xsl:otherwise>
        </xsl:choose>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
