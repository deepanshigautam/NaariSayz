'use client';
import React, { useState } from "react";
import { 
  ArrowLeft,
  BookOpen,
  Shield,
  Scale,
  AlertCircle,
  ChevronRight,
  Building2,
  HeartHandshake,
  Gavel,
  Flag,
  Search,
  Tags
} from "lucide-react";
import Link from "next/link";

const SafetyResourcesPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    { id: "all", name: "All Resources", icon: BookOpen },
    { id: "legal", name: "Legal Rights", icon: Scale },
    { id: "safety", name: "Safety Tips", icon: Shield },
    { id: "awareness", name: "Awareness", icon: AlertCircle },
    { id: "support", name: "Support Services", icon: HeartHandshake }
  ];

  const articles = [
    {
      id: 1,
      title: "Understanding Your Legal Rights: A Comprehensive Guide",
      category: "legal",
      readTime: "8 min read",
      image: " ",
      excerpt: "Based on the World Bank's Women, Business and the Law report, women in many economies have gained more legal rights over time. Learn about your fundamental rights and protections under the law.",
      tags: ["Legal Rights", "Protection", "Justice"],
      content: "Legal framework for women's rights...",
      source: "World Bank WBL Database"
    },
    {
      id: 2,
      title: "Workplace Harassment: Recognition and Response",
      category: "awareness",
      readTime: "6 min read",
      image: " ",
      excerpt: "Understanding different forms of workplace harassment and the steps to address them. Learn about your rights and the proper channels for reporting incidents.",
      tags: ["Workplace Safety", "Harassment", "Rights"],
      content: "Types of workplace harassment...",
      source: "ILO Guidelines"
    },
    {
      id: 3,
      title: "Personal Safety Techniques for Daily Life",
      category: "safety",
      readTime: "5 min read",
      image: " ",
      excerpt: "Essential safety tips and techniques for various situations - from commuting to traveling alone. Practical advice for enhancing personal security.",
      tags: ["Personal Safety", "Self Defense", "Prevention"],
      content: "Safety techniques and tips...",
      source: "Safety Experts"
    },
    {
      id: 4,
      title: "Support Systems: Building Your Safety Network",
      category: "support",
      readTime: "7 min read",
      image: " ",
      excerpt: "How to create and maintain a reliable support network. Information about support groups, counseling services, and community resources.",
      tags: ["Support Network", "Community", "Resources"],
      content: "Building support networks...",
      source: "Social Services"
    },
    {
      id: 5,
      title: "Digital Safety and Privacy Protection",
      category: "safety",
      readTime: "6 min read",
      image: " ",
      excerpt: "Protect yourself online: social media privacy, secure communication, and preventing digital harassment. Essential cybersecurity practices.",
      tags: ["Digital Safety", "Privacy", "Cybersecurity"],
      content: "Digital safety guidelines...",
      source: "Cybersecurity Experts"
    },
    {
      id: 6,
      title: "Global Progress in Women's Legal Protection",
      category: "legal",
      readTime: "10 min read",
      image: " ",
      excerpt: "Analysis of worldwide improvements in women's legal rights and protections, based on World Bank data. Understanding global trends and remaining challenges.",
      tags: ["Global Rights", "Legal Progress", "Research"],
      content: "Global progress analysis...",
      source: "World Bank WBL Report"
    }
  ];

  const filteredArticles = articles.filter(article => {
    const matchesCategory = selectedCategory === "all" || article.category === selectedCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         article.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute w-full h-full bg-[repeating-linear-gradient(60deg,#000,#000_10px,rgba(255,255,255,0.03)_10px,rgba(255,255,255,0.03)_20px)]" />
          <div className="absolute w-full h-full bg-[repeating-linear-gradient(-60deg,#000,#000_10px,rgba(255,255,255,0.03)_10px,rgba(255,255,255,0.03)_20px)]" />
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.8)_70%,rgba(0,0,0,0.95)_100%)]" />
      </div>

      <div className="container mx-auto px-4 py-12 relative">
        <div className="max-w-7xl mx-auto">
          {/* Back Button */}
          <Link href="/" className="inline-flex items-center text-gray-400 hover:text-white mb-12 transition-colors">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </Link>

          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 mb-8">
              <BookOpen className="w-12 h-12 text-purple-400" />
            </div>
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
              Safety Resources
            </h1>
            <p className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed">
              Essential information and guides for personal safety, legal rights, and support services.
            </p>
          </div>

          {/* Search and Categories */}
          <div className="mb-12">
            <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
              {/* Search Bar */}
              <div className="relative w-full md:w-96">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search resources..."
                  className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

              {/* Categories */}
              <div className="flex gap-3 overflow-x-auto pb-2 w-full md:w-auto">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all ${
                      selectedCategory === category.id
                        ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white"
                        : "bg-white/5 text-gray-300 hover:bg-white/10"
                    }`}
                  >
                    <category.icon className="w-4 h-4" />
                    <span className="whitespace-nowrap">{category.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {filteredArticles.map((article) => (
              <div key={article.id} className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500/30 via-pink-500/30 to-red-500/30 rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-300" />
                <div className="relative bg-black/80 backdrop-blur-lg rounded-xl border border-white/10 overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-4">
                      <span className="px-3 py-1 bg-white/10 rounded-full text-xs font-medium text-purple-300">
                        {article.category.charAt(0).toUpperCase() + article.category.slice(1)}
                      </span>
                      <span className="text-xs text-gray-400">{article.readTime}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                      {article.excerpt}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {article.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-purple-500/10 rounded-lg text-xs text-purple-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center justify-between mt-4">
                      <span className="text-xs text-gray-400">Source: {article.source}</span>
                      <button className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors">
                        Read More
                        <ChevronRight className="w-4 h-4 ml-1" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Newsletter Signup */}
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 via-pink-500/20 to-red-500/20 rounded-xl blur opacity-75" />
            <div className="relative bg-black/80 backdrop-blur-lg rounded-xl p-8 border border-white/10">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                  <h2 className="text-2xl font-bold mb-2 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Stay Updated
                  </h2>
                  <p className="text-gray-300">
                    Receive the latest safety resources and updates directly in your inbox.
                  </p>
                </div>
                <div className="flex w-full md:w-auto">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-grow md:w-64 bg-white/5 border border-white/10 rounded-l-lg px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
                  />
                  <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-r-lg hover:opacity-90 transition-opacity">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SafetyResourcesPage;