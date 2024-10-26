'use client';
import React, { useState} from "react";
import { 
    BookOpen,
    Shield,
    Scale,
    AlertCircle,
    HeartHandshake,
    Search,
    X,
    Bookmark,
    Share2,
    ExternalLink,
  } from "lucide-react";
  import Image from 'next/image';
import legalright from '@/src/components/assets/legalRight.jpg';
import img2 from '@/src/components/assets/Sexual-harassment-prevention.jpg'
import img3 from '@/src/components/assets/childMarriage.jpg'
import img5 from '@/src/components/assets/femicide.jpg'
import img6 from '@/src/components/assets/economic-abuse-wide.png'
import img7 from '@/src/components/assets/domestic.jpg'
import img8 from '@/src/components/assets/onlineHaras.jpg'
import img9 from '@/src/components/assets/mentalSupport.jpg'
import img10 from '@/src/components/assets/personalSafety.avif'
import img11 from '@/src/components/assets/workplaceharas.jpg'
import img12 from '@/src/components/assets/sex-trafficking-lawyers-c.jpg'
import img14 from '@/src/components/assets/24-7.webp'
import img15 from '@/src/components/assets/digital-sec.jpg'
import img16 from '@/src/components/assets/rights.jpg'
import img17 from '@/src/components/assets/support.jpg'


import { StaticImageData } from 'next/image';


const ArticleResource = () => {
    const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
 
 
  const [showTooltip, setShowTooltip] = useState("");

  const categories = [
    { id: "all", name: "All Resources", icon: BookOpen },
    { id: "legal", name: "Legal Rights", icon: Scale },
    { id: "safety", name: "Safety Tips", icon: Shield },
    { id: "awareness", name: "Awareness", icon: AlertCircle },
    { id: "support", name: "Support Services", icon: HeartHandshake }
  ];

    

 
  const [savedArticles, setSavedArticles] = useState(new Set());
  
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);


  interface Article {
    id: number;
    title: string;
    category: string;
    readTime: string;
    image: string | StaticImageData; // This allows for both types
    excerpt: string;
    tags: string[];
    content: string;
    source: string;
    url: string;
    lastUpdated: string;
  }

  const articles: Article[] = [
    {
      id: 1,
      title: "Understanding Your Legal Rights: A Comprehensive Guide",
      category: "legal",
      readTime: "8 min read",
      image: legalright,
      excerpt: "Based on the World Bank's Women, Business and the Law report, women in many economies have gained more legal rights over time. Learn about your fundamental rights and protections under the law.",
      tags: ["Legal Rights", "Protection", "Justice"],
      content: "Legal framework for women's rights...",
      source: "World Bank WBL Database",
      url: "https://www.cordaid.org/en/gender/?gad_source=1&gclid=Cj0KCQjwpvK4BhDUARIsADHt9sR0ibWx472hZaG1V17uhIbUHnVMLwiF51cJECNme9CqWLqO8In8gEEaAkJYEALw_wcB",
      lastUpdated: "2024-03-15"
    },
    {
      id: 2,
      title: "Child Marriage: Global Impact and Prevention Strategies",
      category: "awareness",
      readTime: "10 min read",
      image: img3,
      excerpt: "According to UNICEF, 12 million girls under 18 are married each year. Learn about the causes, consequences, and global efforts to end child marriage, including successful intervention programs and policy changes.",
      tags: ["Child Marriage", "Human Rights", "Education"],
      content: "Comprehensive analysis of child marriage...",
      source: "UNICEF Global Database",
      url: "https://blogs.worldbank.org/en/developmenttalk/child-marriage-unspoken-consequence-covid-19",
      lastUpdated: "2024-03-20"
    },
    {
      id: 3,
      title: "Workplace Harassment: Recognition and Response",
      category: "awareness",
      readTime: "7 min read",
      image: img11,
      excerpt: "Understanding different forms of workplace harassment, from subtle discrimination to overt abuse. Learn about reporting mechanisms, legal protections, and creating safer workplace environments.",
      tags: ["Workplace Safety", "Harassment", "Professional Rights"],
      content: "Guide to workplace harassment prevention...",
      source: "ILO Workplace Standards",
      url: "https://idronline.org/article/rights/indias-workplace-sexual-harassment-laws-need-an-update/?gad_source=1&gclid=Cj0KCQjwpvK4BhDUARIsADHt9sR5ir1ZcOtN4jjrYdDAUuDw7dvVvraKkObPJjs9gpIxD4aMniDSUqMaAtIvEALw_wcB",
      lastUpdated: "2024-03-18"
    },
    {
      id: 4,
      title: "Femicide: Understanding and Preventing Gender-Based Violence",
      category: "awareness",
      readTime: "12 min read",
      image: img5,
      excerpt: "UN Women reports that 137 women are killed by family members every day globally. This guide examines risk factors, warning signs, and prevention strategies, while highlighting support resources and policy initiatives.",
      tags: ["Gender Violence", "Prevention", "Support"],
      content: "Analysis of femicide prevention...",
      source: "UN Women Global Database",
      url: "https://rumiforum.org/femicide-the-silent-pandemic/?gad_source=1&gclid=Cj0KCQjwpvK4BhDUARIsADHt9sR_ZeDC6PVLCnJfZV2SAiFXzZFO_kQ-cyy2iqmuxSxp6u9Jl6HzoQ0aApmdEALw_wcB",
      lastUpdated: "2024-03-22"
    },
    {
      id: 5,
      title: "Domestic Violence: Recognition, Response, and Recovery",
      category: "awareness",
      readTime: "9 min read",
      image:    img7,
      excerpt: "One in three women worldwide experience physical or sexual violence. Learn about identifying signs, accessing support services, safety planning, and resources for survivors and their supporters.",
      tags: ["Domestic Violence", "Safety", "Support Services"],
      content: "Comprehensive guide to domestic violence...",
      source: "WHO Global Database",
      url: "https://blogs.worldbank.org/en/developmenttalk/breaking-chains-empowering-women-escape-domestic-violence-through-support-services",
      lastUpdated: "2024-03-25"
    },
    {
      id: 6,
      title: "Digital Safety and Online Harassment Prevention",
      category: "awareness",
      readTime: "6 min read",
      image: img8,
      excerpt: "Navigate the digital world safely with strategies to prevent cyberstalking, online harassment, and digital abuse. Includes privacy protection measures and response strategies for online threats.",
      tags: ["Digital Safety", "Cybersecurity", "Online Protection"],
      content: "Digital safety guidelines...",
      source: "Cyber Safety Organizations",
      url: "#",
      lastUpdated: "2024-03-19"
    },
    {
      id: 7,
      title: "Understanding Sexual Harassment in Public Spaces",
      category: "awareness",
      readTime: "8 min read",
      image: img2,
      excerpt: "Studies show that 80% of women have experienced harassment in public spaces. Learn about prevention strategies, bystander intervention techniques, and community initiatives to create safer public environments.",
      tags: ["Public Safety", "Harassment", "Community Action"],
      content: "Guide to public space safety...",
      source: "UN Safe Cities Initiative",
      url: "https://blogs.worldbank.org/en/developmenttalk/protecting-women-and-girls-cyber-harassment-global-assessment#:~:text=Only%2030%20percent%20of%20economies,some%20legislation%20on%20this%20topic.",
      lastUpdated: "2024-03-21"
    },
    {
      id: 8,
      title: "Economic Abuse: Financial Safety and Independence",
      category: "awareness",
      readTime: "7 min read",
      image: img6,
      excerpt: "Economic abuse affects 1 in 6 women globally. Understand the signs of financial control and exploitation, learn about financial safety planning, and discover resources for economic independence.",
      tags: ["Economic Abuse", "Financial Safety", "Independence"],
      content: "Financial safety strategies...",
      source: "Financial Safety Network",
      url: "https://www.imf.org/en/Publications/fandd/issues/2023/12/PT-global-financial-safety-net",
      lastUpdated: "2024-03-23"
    },
    {
      id: 9,
      title: "Human Trafficking Awareness and Prevention",
      category: "awareness",
      readTime: "11 min read",
      image: img12,
      excerpt: "According to the UN, 71% of trafficking victims are women and girls. Learn about warning signs, prevention strategies, and global initiatives to combat human trafficking, including support resources for survivors.",
      tags: ["Human Trafficking", "Prevention", "Support"],
      content: "Comprehensive trafficking prevention guide...",
      source: "UNODC Global Report",
      url: "https://www.unodc.org/unodc/data-and-analysis/glotip.html",
      lastUpdated: "2024-03-24"
    },
    {
      id: 10,
      title: "Mental Health Support for Survivors",
      category: "awareness",
      readTime: "8 min read",
      image: img9,
      excerpt: "Understanding trauma, PTSD, and recovery paths for survivors of violence. Includes information about therapy options, support groups, and self-care strategies for healing and resilience.",
      tags: ["Mental Health", "Recovery", "Support"],
      content: "Mental health resources guide...",
      source: "National institute of Mental Health Department",
      url: "https://www.nimh.nih.gov/health/topics/women-and-mental-health",
      lastUpdated: "2024-03-26"
    },
    {
        id: 11,
        title: "Personal Safety Planning Guide",
        category: "safety",
        readTime: "6 min read",
        image: img10,
        excerpt: "Essential safety planning strategies including creating emergency contacts, safe words with trusted friends, documenting incidents, and preparing an emergency escape bag with important documents and necessities.",
        tags: ["Safety Planning", "Emergency Preparedness", "Personal Security"],
        content: "Comprehensive safety planning guide...",
        source: "National Safety Council",
        url: "https://www.nsc.org/?srsltid=AfmBOoqBHJIl6ePDtwlLNs7nu_O1yqNx4IvMhzhSOT9v3MBV1JLZqSuN",
        lastUpdated: "2024-03-28"
      },
      {
        id: 12,
        title: "Digital Security Best Practices",
        category: "safety",
        readTime: "5 min read",
        image: img15,
        excerpt: "Learn how to protect your digital privacy with guides on secure passwords, two-factor authentication, privacy settings on social media, and protecting personal information online.",
        tags: ["Digital Safety", "Online Privacy", "Cybersecurity"],
        content: "Digital security guidelines...",
        source: "Cyber Security Alliance",
        url: "https://staysafeonline.org/",
        lastUpdated: "2024-03-25"
      },
      {
        id: 13,
        title: "24/7 Crisis Support Services Directory",
        category: "support",
        readTime: "4 min read",
        image: img14,
        excerpt: "Comprehensive list of emergency hotlines, crisis centers, and support services available 24/7. Includes contact information for domestic violence shelters, counseling services, and legal aid resources.",
        tags: ["Crisis Support", "Hotlines", "Emergency Services"],
        content: "Crisis support services directory...",
        source: "National Crisis Support Network",
        url: "https://nationalcrisissupport.org/",
        lastUpdated: "2024-03-30"
      },
      {
        id: 14,
        title: "Legal Rights and Resources Guide",
        category: "legal",
        readTime: "7 min read",
        image: img16,
        excerpt: "Understanding your legal rights, obtaining protective orders, and accessing free legal assistance. Includes step-by-step guidance on reporting incidents and working with law enforcement.",
        tags: ["Legal Aid", "Rights", "Protection"],
        content: "Legal resources guide...",
        source: "Legal Aid Society",
        url: "https://www.sci.gov.in/legal-aid/",
        lastUpdated: "2024-03-27"
      },
      {
        id: 15,
        title: "Community Support Groups Directory",
        category: "support",
        readTime: "5 min read",
        image: img17,
        excerpt: "Find local and online support groups, peer counseling services, and community organizations that provide assistance and resources for survivors. Includes both in-person and virtual meeting options.",
        tags: ["Support Groups", "Community Resources", "Peer Support"],
        content: "Community support directory...",
        source: "National Resource Center",
        url: "https://www.nift.ac.in/nrc/index.php/nationalresourcecenter",
        lastUpdated: "2024-03-29"
      }
  ];

  const filteredArticles = articles.filter(article => {
    const matchesCategory = selectedCategory === "all" || article.category === selectedCategory;
    const matchesSearch = 
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  



  const toggleSaveArticle = (articleId: number) => {
    setSavedArticles(prev => {
      const newSet = new Set(prev);
      if (newSet.has(articleId)) {
        newSet.delete(articleId);
      } else {
        newSet.add(articleId);
      }
      return newSet;
    });
  };

  const shareArticle = async (article: Article) => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: article.title,
          text: article.excerpt,
          url: article.url,
        });
      } catch (error) {
        console.error("Error sharing:", error);
      }
    } else {
      alert("Sharing is not supported in your browser.");
    }
  };

  return ( <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    {/* Search Section */}
    <div className="mb-8 space-y-6">
        <div className="relative w-full max-w-xl mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            {searchQuery && (
                <button
                    onClick={() => setSearchQuery("")}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-300"
                    aria-label="Clear search"
                >
                    <X className="w-5 h-5" />
                </button>
            )}
            <input
                type="text"
                placeholder="Search resources..."
                className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-11 pr-11 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />
        </div>

        {/* Category Filters */}
        <div className="relative">
            {/* Mobile Category Dropdown */}
            <div className="md:hidden">
                <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="w-full bg-white/5 border border-white/10 rounded-xl py-3 px-4 text-white flex justify-between items-center"
                >
                    <span>Select Category</span>
                    <span className={`transform transition-transform ${isMobileMenuOpen ? 'rotate-180' : ''}`}>▼</span>
                </button>
                {isMobileMenuOpen && (
                    <div className="absolute z-10 w-full mt-2 bg-gray-800 rounded-xl shadow-lg">
                        {categories.map((category) => (
                            <button
                                key={category.id}
                                onClick={() => {
                                    setSelectedCategory(category.id);
                                    setIsMobileMenuOpen(false);
                                }}
                                className={`w-full flex items-center space-x-2 px-4 py-3 transition-all ${
                                    selectedCategory === category.id
                                        ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white"
                                        : "text-gray-300 hover:bg-white/10"
                                }`}
                            >
                                <category.icon className="w-5 h-5" />
                                <span>{category.name}</span>
                            </button>
                        ))}
                    </div>
                )}
            </div>

            {/* Desktop Category Buttons */}
            <div className="hidden md:flex gap-3 overflow-x-auto pb-2 justify-center">
                {categories.map((category) => (
                    <div
                        key={category.id}
                        className="relative"
                        onMouseEnter={() => setShowTooltip(category.id)}
                        onMouseLeave={() => setShowTooltip("")}
                    >
                        <button
                            onClick={() => setSelectedCategory(category.id)}
                            className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all whitespace-nowrap ${
                                selectedCategory === category.id
                                    ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white"
                                    : "bg-white/5 text-gray-300 hover:bg-white/10"
                            }`}
                            aria-label={`Filter by ${category.name}`}
                        >
                            <category.icon className="w-5 h-5" />
                            <span>{category.name}</span>
                        </button>
                        {showTooltip === category.id && (
                            <div className="absolute -top-8 rounded p-2 text-sm text-white ">
                                {category.name}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    </div>

    {/* Articles Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {filteredArticles.length === 0 ? (
            <div className="col-span-full text-center py-12">
                <p className="text-xl text-gray-400">No results found.</p>
            </div>
        ) : (
            filteredArticles.map((article) => (
                <div
                    key={article.id}
                    className="bg-white/10 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow flex flex-col"
                >
                    <div className="relative pt-[56.25%]"> {/* 16:9 aspect ratio */}
                    <Image
    src={typeof article.image === 'string' ? article.image : article.image.src}
    alt={article.title}
    layout="fill" // This is used to cover the entire parent container
    objectFit="cover" // Similar to object-cover in regular img
    className="absolute top-0 left-0"
/>
                    </div>
                    <div className="p-4 flex-1 flex flex-col">
                        <h3 className="text-lg sm:text-xl font-bold mb-2">{article.title}</h3>
                        <p className="text-gray-300 text-sm sm:text-base mb-2 flex-1">{article.excerpt}</p>
                        <div className="flex flex-wrap justify-between items-center gap-2 mt-4">
                            <span className="text-gray-400 text-sm">{article.readTime}</span>
                            <div className="flex gap-3">
                                <button
                                    onClick={() => toggleSaveArticle(article.id)}
                                    className={`text-gray-400 hover:text-gray-300 ${savedArticles.has(article.id) ? "text-yellow-400" : ""}`}
                                    aria-label={`Save ${article.title}`}
                                >
                                    <Bookmark className="w-5 h-5" />
                                </button>
                                <button
                                    onClick={() => shareArticle(article)}
                                    className="text-gray-400 hover:text-gray-300"
                                    aria-label={`Share ${article.title}`}
                                >
                                    <Share2 className="w-5 h-5" />
                                </button>
                                <a
                                    href={article.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-400 hover:text-gray-300"
                                    aria-label={`Read more about ${article.title}`}
                                >
                                    <ExternalLink className="w-5 h-5" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            ))
        )}
    </div>
</div>
   
  );
};

export default ArticleResource;
