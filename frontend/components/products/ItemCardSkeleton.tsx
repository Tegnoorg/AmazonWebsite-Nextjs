import React from "react";
import { Card, CardHeader, CardBody, Image, Skeleton } from "@nextui-org/react";

// a skeleton for a product card, used when queries are loading and there's no data yet to display
export function ItemCardSkeleton() {
  return (
    <Card className="py-2 w-60">
      <CardHeader className="py-2 px-4 flex-col items-start">
        <Skeleton className="rounded-lg">
          <h4 className="font-bold text-xl">product header</h4>
        </Skeleton>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Skeleton className="rounded-lg">
          <Image
            alt=""
            className="w-full object-cover h-[250px]"
            src=""
            width={270}
          />
        </Skeleton>
        <Skeleton className="w-3/5 rounded-lg mt-2">
          <p>price</p>
        </Skeleton>
        <Skeleton className="w-4/5 rounded-lg mt-2">
          <p>desc</p>
        </Skeleton>
        <Skeleton className="w-2/5 rounded-lg mt-2">
          <p>desc</p>
        </Skeleton>
      </CardBody>
    </Card>
  );
}
