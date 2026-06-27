import { motion } from "framer-motion";

const articles = [
  {
    title: "Future of Recruitment in 2026",
    category: "HR Strategy",
    excerpt: "Discover the emerging trends that will shape how companies attract and retain top talent in the coming years.",
  },
  {
    title: "How AI is Transforming HR",
    category: "Technology",
    excerpt: "From automated screening to predictive analytics, learn how artificial intelligence is streamlining human resources.",
  },
  {
    title: "Top Hiring Trends Every Business Should Know",
    category: "Market Insights",
    excerpt: "Stay ahead of the competition by understanding candidate expectations and shifting market dynamics.",
  }
];

export default function Blog() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary inline-block relative">
            Insights & Perspectives
            <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-accent" />
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group border border-border"
            >
              <div className="h-48 bg-gradient-to-br from-primary to-accent/80 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300" />
              </div>
              <div className="p-6">
                <span className="inline-block px-3 py-1 bg-primary/5 text-accent text-xs font-semibold rounded-full mb-4">
                  {article.category}
                </span>
                <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-accent transition-colors">
                  {article.title}
                </h3>
                <p className="text-muted-foreground mb-6 line-clamp-2">
                  {article.excerpt}
                </p>
                <button className="text-primary font-medium hover:text-accent transition-colors flex items-center gap-2 text-sm">
                  Read More <span className="group-hover:translate-x-1 transition-transform">→</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
