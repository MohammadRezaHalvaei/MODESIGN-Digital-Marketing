"use client";

import { Skeleton } from "antd";

export default function CaseSkleton({ bgColor }: { bgColor: string }) {
  return (
    <div className="max-w-[1200px] mx-auto py-[50px] px-6 max-sm:px-4">
      <div
        className="grid grid-cols-2 gap-[50px] p-[50px] rounded-[10px] max-xl:grid-cols-1 max-sm:p-7 max-sm:gap-7"
        style={{ backgroundColor: `${bgColor}` }}
      >
        <Skeleton.Image
          active={true}
          className="min-w-[525px] min-h-[460px] rounded-[10px] max-xl:min-w-full"
        />
        <div className="py-[50px] px-9 bg-white rounded-[10px] max-sm:py-7">
          <Skeleton.Input active className="mb-5 min-h-[40px]" />
          <Skeleton active className="mb-10" />
          <Skeleton.Input
            active
            size="large"
            className="min-w-[220px] min-h-[64px]"
          />
        </div>
      </div>
    </div>
  );
}
