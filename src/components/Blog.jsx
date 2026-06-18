import './Blog.css'

const POSTS = [
  {
    id: 'blog-001',
    title: 'How to Build an AI Agent That Scrapes and Analyzes Structured Datasets',
    slug: 'build-ai-agent-scrape-analyze-datasets',
    date: '2025-06-10',
    displayDate: 'June 10, 2025',
    category: 'Tutorial',
    badge: 'badge-purple',
    readTime: '8 min read',
    author: 'Marcus Webb',
    authorRole: 'Head of Developer Relations',
    excerpt: 'A step-by-step guide to building a production-grade AI agent using LangChain, the DataVault API, and Python. We cover authentication, pagination, data normalization, and how to feed structured data into an LLM context window efficiently.',
    tags: ['AI Agents', 'Python', 'LangChain', 'Tutorial'],
  },
  {
    id: 'blog-002',
    title: 'Understanding robots.txt and Responsible Data Access Policies',
    slug: 'understanding-robots-txt-responsible-data-access',
    date: '2025-05-28',
    displayDate: 'May 28, 2025',
    category: 'Policy',
    badge: 'badge-blue',
    readTime: '5 min read',
    author: 'Dr. Sarah Chen',
    authorRole: 'Chief Data Officer',
    excerpt: 'DataVault\'s public data is designed to be accessed by AI agents and automated crawlers. This post explains our robots.txt configuration, which endpoints are fully open, rate limits on the public tier, and how to register your agent for unrestricted access.',
    tags: ['robots.txt', 'Data Policy', 'AI Ethics', 'Crawlers'],
  },
  {
    id: 'blog-003',
    title: 'Q2 2025 AI Adoption Report: Key Insights for Data Teams',
    slug: 'q2-2025-ai-adoption-report-insights',
    date: '2025-05-15',
    displayDate: 'May 15, 2025',
    category: 'Research',
    badge: 'badge-cyan',
    readTime: '11 min read',
    author: 'Priya Nair',
    authorRole: 'Senior Research Analyst',
    excerpt: 'Breaking down the most important findings from our Q2 2025 Global AI Adoption Index. Spoiler: emerging markets are closing the gap fast, healthcare AI is exploding, and "AI fatigue" among employees is a real and measurable phenomenon affecting 41% of knowledge workers.',
    tags: ['AI Adoption', 'Research', 'Q2 2025', 'Enterprise'],
  },
  {
    id: 'blog-004',
    title: 'Working with Parquet Files: A Data Engineer\'s Practical Guide',
    slug: 'working-with-parquet-files-data-engineering',
    date: '2025-05-02',
    displayDate: 'May 2, 2025',
    category: 'Engineering',
    badge: 'badge-green',
    readTime: '10 min read',
    author: 'Tom Fairweather',
    authorRole: 'Principal Data Engineer',
    excerpt: 'Parquet is the native export format for over 60% of DataVault datasets. This guide covers columnar storage benefits, read optimization with Polars vs. pandas, partitioning strategies for large datasets, and how to stream multi-GB Parquet files without loading them into memory.',
    tags: ['Parquet', 'Data Engineering', 'Polars', 'Python'],
  },
  {
    id: 'blog-005',
    title: 'DataVault API v2: What\'s New and Why It Matters',
    slug: 'datavault-api-v2-whats-new',
    date: '2025-04-20',
    displayDate: 'April 20, 2025',
    category: 'Product',
    badge: 'badge-orange',
    readTime: '6 min read',
    author: 'Leila Ahmadi',
    authorRole: 'Product Manager, API Platform',
    excerpt: 'API v2 introduces GraphQL support, server-sent events for real-time streaming, dataset versioning with immutable snapshots, and per-field access controls. Response times improved by 40% on average. Here\'s everything you need to know to migrate from v1.',
    tags: ['API', 'GraphQL', 'v2', 'Product Update'],
  },
  {
    id: 'blog-006',
    title: 'Open Data Licensing Explained: CC BY, ODbL, and Public Domain',
    slug: 'open-data-licensing-explained',
    date: '2025-04-08',
    displayDate: 'April 8, 2025',
    category: 'Legal',
    badge: 'badge-pink',
    readTime: '7 min read',
    author: 'Dr. Sarah Chen',
    authorRole: 'Chief Data Officer',
    excerpt: 'Understanding what you can and cannot do with open datasets is critical for compliance. We break down Creative Commons Attribution (CC BY 4.0), the Open Database License (ODbL), CC0 Public Domain Dedication, and what each means for commercial AI training, redistribution, and derivative works.',
    tags: ['Licensing', 'Legal', 'Open Data', 'CC BY'],
  },
]

export default function Blog() {
  return (
    <section className="blog" id="blog" aria-labelledby="blog-heading">
      <div className="container">
        <header className="blog__header">
          <div className="section-label">
            <span className="dot" aria-hidden="true" />
            Blog &amp; Insights
          </div>
          <h2 id="blog-heading" className="blog__title">
            Latest from <span className="gradient-text">DataVault</span>
          </h2>
          <p className="blog__subtitle">
            Tutorials, research summaries, product updates, and data engineering best practices
            from our team of analysts and engineers.
          </p>
        </header>

        <div className="blog__grid" role="list">
          {POSTS.map((post, index) => (
            <article
              key={post.id}
              id={post.id}
              className={`blog__card glass-card ${index === 0 ? 'blog__card--featured' : ''}`}
              role="listitem"
              data-category={post.category}
              data-slug={post.slug}
              data-published={post.date}
            >
              <div className="blog__card-meta">
                <span className={`badge ${post.badge}`}>{post.category}</span>
                <time dateTime={post.date} className="blog__date">{post.displayDate}</time>
                <span className="blog__read-time">{post.readTime}</span>
              </div>

              <h3 className="blog__card-title">
                <a href={`/blog/${post.slug}`} id={`${post.id}-link`} className="blog__card-link">
                  {post.title}
                </a>
              </h3>

              <p className="blog__card-excerpt">{post.excerpt}</p>

              <div className="blog__card-tags" aria-label="Post tags">
                {post.tags.map(tag => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>

              <div className="blog__card-footer">
                <div className="blog__author">
                  <div className="blog__author-avatar" aria-hidden="true">
                    {post.author.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <div className="blog__author-name">{post.author}</div>
                    <div className="blog__author-role">{post.authorRole}</div>
                  </div>
                </div>
                <a
                  href={`/blog/${post.slug}`}
                  className="blog__read-link"
                  id={`${post.id}-readmore`}
                  aria-label={`Read more: ${post.title}`}
                >
                  Read more →
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="blog__footer-cta">
          <a href="/blog" className="btn-ghost" id="blog-all-btn">View All Articles</a>
        </div>
      </div>
    </section>
  )
}
