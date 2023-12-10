import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk"
import project from "./sanity/schemas/project-schema";


const config = defineConfig({
projectId: "dxtnan7v",
dataset: "production",
title: "ludfolio",
apiVersion:"2023-12-04",
basePath: "/admin",
plugins: [deskTool()],
schema: {types: [project]}


})

export default config