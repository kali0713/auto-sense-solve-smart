
import { Layout } from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, FileText, Tag, Plus } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const KnowledgeBasePage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  // Mock articles for demonstration
  const articles = [
    {
      id: "1",
      title: "Understanding Common Engine Warning Lights",
      category: "Engine",
      excerpt: "A comprehensive guide to interpreting dashboard warning lights related to your engine system.",
      date: "2024-04-12",
      readTime: "5 min"
    },
    {
      id: "2",
      title: "How to Check Your Car's Battery Health",
      category: "Battery",
      excerpt: "Learn how to properly test and maintain your vehicle's battery to prevent unexpected failures.",
      date: "2024-03-28",
      readTime: "4 min"
    },
    {
      id: "3",
      title: "Troubleshooting Brake System Issues",
      category: "Brakes",
      excerpt: "Identify common brake problems through symptoms like noise, vibration, and reduced stopping power.",
      date: "2024-04-05",
      readTime: "6 min"
    },
    {
      id: "4",
      title: "Diagnosing Transmission Problems",
      category: "Transmission",
      excerpt: "Learn the warning signs of transmission issues and what they might indicate about your vehicle.",
      date: "2024-04-15",
      readTime: "7 min"
    }
  ];

  const categories = [
    { id: "engine", name: "Engine", count: 12 },
    { id: "battery", name: "Battery", count: 8 },
    { id: "brakes", name: "Brakes", count: 10 },
    { id: "transmission", name: "Transmission", count: 9 },
    { id: "suspension", name: "Suspension", count: 7 },
    { id: "electrical", name: "Electrical", count: 14 }
  ];

  return (
    <Layout>
      <div className="container py-8 max-w-6xl">
        <div className="flex flex-col gap-6">
          <section className="text-center py-6">
            <h1 className="text-4xl font-bold mb-4">Knowledge Base</h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Explore our collection of automotive troubleshooting guides, how-to articles, and technical information.
            </p>
            <div className="mt-8 max-w-md mx-auto">
              <div className="flex items-center gap-2">
                <div className="relative flex-1">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Search knowledge base..."
                    className="pl-8"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <Button type="submit">Search</Button>
              </div>
            </div>
          </section>
          
          <Tabs defaultValue="articles" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2">
              <TabsTrigger value="articles">Articles</TabsTrigger>
              <TabsTrigger value="categories">Categories</TabsTrigger>
            </TabsList>
            <TabsContent value="articles" className="mt-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {articles.map((article) => (
                  <Card key={article.id}>
                    <CardHeader>
                      <div className="text-sm text-muted-foreground mb-1">
                        {article.category} • {article.readTime} read
                      </div>
                      <CardTitle>
                        <Link to={`/knowledge-base/${article.id}`} className="hover:text-automotive-blue transition-colors">
                          {article.title}
                        </Link>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{article.excerpt}</p>
                      <div className="mt-4">
                        <Link to={`/knowledge-base/${article.id}`}>
                          <Button variant="outline" size="sm">
                            Read Article
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="categories" className="mt-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {categories.map((category) => (
                  <Card key={category.id}>
                    <CardHeader className="pb-2">
                      <CardTitle className="text-xl flex justify-between items-center">
                        {category.name}
                        <span className="text-sm font-normal text-muted-foreground">
                          {category.count} articles
                        </span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <Link to={`/knowledge-base/category/${category.id}`}>
                        <Button variant="ghost" className="w-full justify-start">
                          <Tag className="mr-2 h-4 w-4" />
                          Browse Articles
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </Layout>
  );
};

export default KnowledgeBasePage;
