"use client";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { IconBrandGithub, IconExternalLink } from "@tabler/icons-react";

export function Card(props) {
  return (
    <CardContainer>
      <CardBody className="bg-white dark:bg-gray-800 relative group/card hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:border-white/[0.2] border-black/[0.1] w-full h-full rounded-xl p-6 border transition-all duration-300">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-gray-800 dark:text-white mb-2"
        >
          {props.title}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3"
        >
          {props.des}
        </CardItem>
        
        {props.tags && props.tags.length > 0 && (
          <CardItem translateZ="40" className="mb-4">
            <div className="flex flex-wrap gap-2">
              {props.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-2 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-md"
                >
                  {tag}
                </span>
              ))}
            </div>
          </CardItem>
        )}

        <CardItem translateZ="100" className="w-full mb-4">
          <div className="relative overflow-hidden rounded-lg bg-gray-200 dark:bg-gray-700 aspect-video">
            <img
              src={props.img}
              alt={props.title}
              className="h-full w-full object-cover group-hover/card:scale-110 transition-transform duration-500"
              onError={(e) => {
                e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect fill='%23ddd' width='400' height='300'/%3E%3Ctext fill='%23999' font-family='sans-serif' font-size='20' dy='10.5' font-weight='bold' x='50%25' y='50%25' text-anchor='middle'%3EProject Image%3C/text%3E%3C/svg%3E";
              }}
            />
          </div>
        </CardItem>
        
        <div className="flex justify-between items-center mt-6 gap-3">
          <CardItem
            translateZ={20}
            as="a"
            href={props.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
          >
            <IconBrandGithub className="w-4 h-4" />
            <span>Code</span>
          </CardItem>
          <CardItem
            translateZ={20}
            as="a"
            href={props.live || props.Live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-black dark:bg-white text-white dark:text-black text-sm font-medium hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors duration-200"
          >
            <span>Live Demo</span>
            <IconExternalLink className="w-4 h-4" />
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}
