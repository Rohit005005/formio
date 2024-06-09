import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Themes from "@/app/_data/Themes";
import GradientBg from "@/app/_data/GradientBg";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

function Controller({ seletedTheme, selectedBackground,setSignInEnable }) {
  const [showMore, setshowMore] = useState(6);
  return (
    <div>
      <h2 className="my-3">Themes</h2>
      <Select onValueChange={(value) => seletedTheme(value)}>
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Theme" />
        </SelectTrigger>
        <SelectContent>
          {Themes.map((theme, index) => (
            <SelectItem value={theme.theme} key={index}>
              <div className="flex gap-3">
                <div className="flex">
                  <div
                    className=" h-5 w-5 rounded-l-md"
                    style={{ backgroundColor: theme.primary }}
                  ></div>
                  <div
                    className=" h-5 w-5"
                    style={{ backgroundColor: theme.secondary }}
                  ></div>
                  <div
                    className=" h-5 w-5"
                    style={{ backgroundColor: theme.accent }}
                  ></div>
                  <div
                    className=" h-5 w-5 rounded-r-md"
                    style={{ backgroundColor: theme.neutral }}
                  ></div>
                </div>
                {theme.theme}
              </div>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <h2 className=" mt-8 my-3">Background</h2>
      <div className="grid grid-cols-3 gap-5">
        {GradientBg.map(
          (bg, index) =>
            index < showMore && (
              <div
                key={index}
                onClick={() => selectedBackground(bg.gradient)}
                className="w-full h-[70px] rounded-lg hover:border-black hover:border flex items-center justify-center cursor-pointer"
                style={{ background: bg.gradient }}
              >
                {index == 0 && "None"}
              </div>
            )
        )}
      </div>
      <Button
        variant="ghost"
        size="sm"
        className="w-full my-3"
        onClick={() => setshowMore(showMore > 6 ? 6 : 20)}
      >
        {showMore > 6 ? "Show Less" : "Show More"}
      </Button>
      <div className="flex gap-2 my-5 items-center mt-5">
        <Checkbox onCheckedChange={(e) => setSignInEnable(e)} />
        <h2>Enable Social Authentication before submit of the form</h2>
      </div>
    </div>
  );
}

export default Controller;
