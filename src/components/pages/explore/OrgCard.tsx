import { Button } from "@/components/ui/shadcn/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/shadcn/card";
import { Org } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";

export default function OrgCard({ org }: { org: Org }) {
  return (
    <Link href={`/org/${org.id}`}>
      <Card className="rounded-3xl mb-4">
        <div className="flex">
          <div
            id="Image"
            className="w-32 h-32 bg-neutral-300 rounded-3xl shadow-lg"
          >
            {org.orgPicture && (
              <Image
                className="rounded-3xl"
                src={org.orgPicture}
                alt={org.name}
                width={150}
                height={150}
              />
            )}
          </div>
          <div
            id="Content"
            className="flex flex-col p-3 w-[calc(100%-9rem)] h-32"
          >
            <CardHeader className="m-0 p-0">
              {/*               <span id="Category" className="text-sm text-stone-500 overflow-hidden line-clamp-1">
                {org.category ? org.category : "Other"}
              </span> */}
              <CardTitle className="text-lg overflow-hidden line-clamp-2">
                {org.name}
              </CardTitle>
            </CardHeader>
            <div
              id="Body"
              className="flex my-auto justify-between items-center"
            >
              <CardDescription className="text-xs text-gray-700 overflow-hidden line-clamp-2">
                {org.description}
              </CardDescription>
              <Button
                style={{ backgroundColor: org.color || "black" }}
                className="ml-1 items-center rounded-full w-12 h-6 text-xs"
              >
                Join
              </Button>
            </div>
          </div>
        </div>
      </Card>
    </Link>
  );
}
