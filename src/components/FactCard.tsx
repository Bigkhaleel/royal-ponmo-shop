import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface FactCardProps {
  icon: LucideIcon;
  fact: string;
}

const FactCard = ({ icon: Icon, fact }: FactCardProps) => {
  return (
    <Card className="shadow-card hover:shadow-hover transition-all duration-300 hover:-translate-y-1">
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          <div className="rounded-lg bg-primary/10 p-3">
            <Icon className="h-6 w-6 text-primary" />
          </div>
          <p className="text-sm leading-relaxed text-muted-foreground flex-1">
            {fact}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default FactCard;
