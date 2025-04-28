
import { SystemCategory } from "@/types";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Settings, Battery, Gauge, Cog, CircleDot, Fuel } from "lucide-react";
import { Link } from "react-router-dom";

interface SystemCategoryCardProps {
  category: SystemCategory;
}

export function SystemCategoryCard({ category }: SystemCategoryCardProps) {
  const getIcon = () => {
    switch (category.iconName) {
      case "engine":
        return <Settings className="h-8 w-8 text-automotive-blue" />;
      case "battery":
        return <Battery className="h-8 w-8 text-automotive-blue" />;
      case "brake":
        return <Gauge className="h-8 w-8 text-automotive-blue" />;
      case "gear":
        return <Cog className="h-8 w-8 text-automotive-blue" />;
      case "wheel":
        return <CircleDot className="h-8 w-8 text-automotive-blue" />;
      case "fuel":
        return <Fuel className="h-8 w-8 text-automotive-blue" />;
      default:
        return <Settings className="h-8 w-8 text-automotive-blue" />;
    }
  };

  return (
    <Link to={`/symptoms?category=${category.id}`}>
      <Card className="hover:border-automotive-blue hover:shadow-md transition-all">
        <CardHeader className="pb-2">
          <CardTitle className="flex items-center gap-2">
            {getIcon()}
            <span>{category.name}</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            {category.description}
          </p>
        </CardContent>
      </Card>
    </Link>
  );
}
