import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface TweetCardProps {
  username?: string;
  handle?: string;
  link?: string;
  buttonText?: string;
}

export function TweetCard({
  username = "Follow on X",
  handle = "@aHj_builds",
  link = "https://x.com/aHj_builds",
  buttonText = "Follow Me"
}: TweetCardProps) {
  return (
    <Card className="bg-white hover:shadow-lg transition-all duration-300 rounded-xl overflow-hidden">
      <CardContent className="p-8 flex flex-col items-center text-center">
        <div className="h-24 w-24 bg-gray-100 rounded-full flex items-center justify-center mb-10">
          <div className="bg-black rounded-full w-14 h-14 flex items-center justify-center">
            <img 
              src="/x-logo.svg" 
              alt="X Logo" 
              className="w-7 h-7"
            />
          </div>
        </div>
        
        <h3 className="text-2xl font-bold mb-4 text-gray-800">{username}</h3>
        <p className="text-gray-500 text-lg mb-10">{handle}</p>
        
        <Button 
          asChild
          variant="outline"
          className="w-full flex items-center justify-center gap-2 border-gray-300 py-6 rounded-md bg-gray-100 hover:bg-gray-200 text-gray-600"
        >
          <Link 
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-base font-medium"
          >
            <div className="bg-black rounded-full w-6 h-6 flex items-center justify-center mr-2">
              <img src="/x-logo.svg" alt="X" className="w-3 h-3" />
            </div>
            {buttonText}
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
}
