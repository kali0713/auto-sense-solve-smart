
import { Layout } from "@/components/Layout";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, MessageSquare, Users, Plus } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const CommunityPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  // Mock forum discussions for demonstration
  const discussions = [
    {
      id: "1",
      title: "Intermittent starting issues with 2018 Toyota Camry",
      author: "CarEnthusiast",
      replies: 12,
      views: 145,
      lastReply: "2 hours ago"
    },
    {
      id: "2",
      title: "Battery keeps draining overnight - 2020 Honda Civic",
      author: "HondaOwner",
      replies: 8,
      views: 93,
      lastReply: "5 hours ago"
    },
    {
      id: "3",
      title: "Clicking sound when turning wheel at low speeds",
      author: "MechanicPro",
      replies: 15,
      views: 210,
      lastReply: "Yesterday"
    },
    {
      id: "4",
      title: "Best OBD2 scanner for DIY diagnostics?",
      author: "DIY_Mechanic",
      replies: 24,
      views: 320,
      lastReply: "2 days ago"
    },
    {
      id: "5",
      title: "Air conditioning stopped working after battery replacement",
      author: "SummerDriver",
      replies: 6,
      views: 78,
      lastReply: "3 days ago"
    }
  ];
  
  const categories = [
    { name: "Engine Issues", count: 145 },
    { name: "Electrical System", count: 87 },
    { name: "Transmission Problems", count: 64 },
    { name: "Suspension & Steering", count: 53 },
    { name: "Brakes", count: 48 },
    { name: "Interior & Comfort", count: 37 }
  ];
  
  const experts = [
    { id: "1", name: "Mike Johnson", specialty: "Engine Diagnostics", contributions: 127 },
    { id: "2", name: "Sarah Chen", specialty: "Electrical Systems", contributions: 95 },
    { id: "3", name: "Robert Garcia", specialty: "Transmission Specialist", contributions: 82 },
    { id: "4", name: "Amanda Miller", specialty: "General Mechanic", contributions: 156 }
  ];

  return (
    <Layout>
      <div className="container py-8 max-w-6xl">
        <div className="flex flex-col gap-6">
          <section className="text-center py-6">
            <h1 className="text-4xl font-bold mb-4">Community Forum</h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Join our community of automotive enthusiasts, DIY mechanics, and professionals to discuss car problems and share solutions.
            </p>
            <div className="mt-8 max-w-md mx-auto">
              <div className="flex items-center gap-2">
                <div className="relative flex-1">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Search discussions..."
                    className="pl-8"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <Button>Search</Button>
              </div>
              <div className="mt-4">
                <Button className="w-full sm:w-auto">
                  <Plus className="mr-2 h-4 w-4" /> New Discussion
                </Button>
              </div>
            </div>
          </section>
          
          <Tabs defaultValue="discussions" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-3">
              <TabsTrigger value="discussions">Discussions</TabsTrigger>
              <TabsTrigger value="categories">Categories</TabsTrigger>
              <TabsTrigger value="experts">Experts</TabsTrigger>
            </TabsList>
            
            <TabsContent value="discussions" className="mt-6">
              <Card>
                <CardHeader className="bg-muted/50">
                  <div className="grid grid-cols-12 text-sm font-medium">
                    <div className="col-span-6">Topic</div>
                    <div className="col-span-2 text-center">Replies</div>
                    <div className="col-span-2 text-center">Views</div>
                    <div className="col-span-2 text-center">Last Reply</div>
                  </div>
                </CardHeader>
                <CardContent className="p-0">
                  <ul className="divide-y">
                    {discussions.map((discussion) => (
                      <li key={discussion.id} className="p-4 hover:bg-muted/50 transition-colors">
                        <Link to={`/community/discussion/${discussion.id}`} className="grid grid-cols-12 gap-2 items-center">
                          <div className="col-span-6">
                            <h3 className="font-medium text-automotive-blue">{discussion.title}</h3>
                            <p className="text-sm text-muted-foreground">Posted by {discussion.author}</p>
                          </div>
                          <div className="col-span-2 text-center">{discussion.replies}</div>
                          <div className="col-span-2 text-center">{discussion.views}</div>
                          <div className="col-span-2 text-center text-sm">{discussion.lastReply}</div>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="flex justify-between border-t p-4">
                  <Button variant="outline" disabled>Previous</Button>
                  <div className="text-sm text-muted-foreground">
                    Page 1 of 12
                  </div>
                  <Button variant="outline">Next</Button>
                </CardFooter>
              </Card>
            </TabsContent>
            
            <TabsContent value="categories" className="mt-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {categories.map((category, idx) => (
                  <Card key={idx}>
                    <CardHeader>
                      <CardTitle className="text-xl flex justify-between">
                        {category.name}
                        <span className="text-sm text-muted-foreground">
                          {category.count} topics
                        </span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <Link to={`/community/category/${category.name.toLowerCase().replace(/\s+/g, '-')}`}>
                        <Button variant="outline" className="w-full">Browse Topics</Button>
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="experts" className="mt-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {experts.map((expert) => (
                  <Card key={expert.id}>
                    <CardHeader>
                      <CardTitle>{expert.name}</CardTitle>
                      <p className="text-sm text-muted-foreground">{expert.specialty}</p>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between">
                        <div className="text-sm">
                          <span className="font-medium">{expert.contributions}</span> contributions
                        </div>
                        <Link to={`/community/expert/${expert.id}`}>
                          <Button variant="outline" size="sm">View Profile</Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <div className="mt-8 text-center">
                <p className="text-muted-foreground mb-2">Are you an automotive professional?</p>
                <Link to="/community/become-expert">
                  <Button>Apply to Become an Expert</Button>
                </Link>
              </div>
            </TabsContent>
          </Tabs>
          
          <section className="mt-8 border-t pt-8">
            <h2 className="text-2xl font-bold mb-4">Join Our Community</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-muted-foreground mb-4">
                  Share your automotive knowledge, ask questions, and connect with other car enthusiasts and professionals. Our community is here to help with troubleshooting and advice.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center">
                    <MessageSquare className="mr-2 h-4 w-4 text-automotive-blue" />
                    Get answers to your automotive questions
                  </li>
                  <li className="flex items-center">
                    <Users className="mr-2 h-4 w-4 text-automotive-blue" />
                    Connect with certified mechanics
                  </li>
                  <li className="flex items-center">
                    <Plus className="mr-2 h-4 w-4 text-automotive-blue" />
                    Contribute your knowledge and experience
                  </li>
                </ul>
              </div>
              <Card>
                <CardHeader>
                  <CardTitle>Have a question?</CardTitle>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div>
                      <Input placeholder="Title of your question" />
                    </div>
                    <div>
                      <Textarea 
                        placeholder="Describe your issue in detail..." 
                        className="min-h-[120px]"
                      />
                    </div>
                    <Button type="submit" className="w-full">Post Question</Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default CommunityPage;
