import React from "react";
import Image from "next/image";

const SkillCard: React.FC<{ path: string; name: string; width: number; height:number }> = ({
  path,
  name,
  width,
  height
}) => {
  return (
    <div className="bg-cards p-6 rounded-lg shadow-lg flex flex-col justify-center items-center hover:scale-105 transform transition duration-300">
      <Image className="w-20 h-20" src={path} width={width} height={height} alt="Skill Icon" />
      <p className="mt-4 text-sm">{name}</p>
    </div>
  );
};

export default SkillCard;