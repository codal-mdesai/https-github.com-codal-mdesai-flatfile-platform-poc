"use client";
import { ISpace } from "@flatfile/react";
import React from "react";
import {listener} from "../../listeners/basic";
import { workbook } from "../../workbooks/workbook";
import NewSpaceApp from "./NewSpaceApp";

const spaceProps: ISpace = {
  name: "VIP Test",
  namespace: "product-address",
  space: {
    id: "1",
    accessToken: "122"
  } as any,
  // to test locally add your publishableKey here, for example: pk_12345,
  publishableKey: "pk_4c4b6c96cc7f4c54bc856fa98153b40f",
  // to test locally add your environmentId here, for example: us_env_12345,
  environmentId: "us_env_LutmoxoP",
  workbook,
  listener: listener,
  translationsPath:"",
  languageOverride:""
  // themeConfig: makeTheme({ primaryColor: "#546a76", textColor: "#fff" }),
  // sidebarConfig: {
  //   showDataChecklist: false,
  //   showSidebar: false,
  // },
};

export default function Home() {
  return (
    <div className="container px-20 pt-20">
      <h2 className="text-2xl font-bold mb-4">
        Embed a new Space every time Flatfile is opened
      </h2>
      <p>
        Reuse a Space when users might need to wait or can’t finish in one go.
        It’s great for keeping work context and letting users continue where
        they left off until the task is done.
      </p>
      <div className="py-10">
        <NewSpaceApp config={spaceProps} />
      </div>
    </div>
  );
}
