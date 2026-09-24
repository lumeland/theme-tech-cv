import lumeCMS from "lume/cms/mod.ts";

const cms = lumeCMS();

cms.document({
  label: "Resume",
  icon: "article",
  name: "cv",
  store: "src:_data/cv.yml",
  previewUrl: () => "/",
  fields: [
    "name: text",
    "about: markdown",
    "location: markdown",
    "avatar: file",
    {
      name: "contact",
      type: "object-list",
      fields: [
        "label: text",
        "url: url"
      ]
    },
    {
      name: "blocks",
      type: "choose-list",
      fields: [
        {
          name: "text",
          type: "object",
          fields: [
            "title: text",
            "content: markdown"
          ]
        },
        {
          name: "education",
          type: "object",
          fields: [
            "title: text",
            {
              name: "items",
              type: "object-list",
              fields: [
                "school: text",
                "degree: text",
                "start: text",
                "end: text",
              ]
            }
          ]
        },
        {
          name: "work",
          type: "object",
          fields: [
            "title: text",
            {
              name: "items",
              type: "object-list",
              fields: [
                "title: text",
                "company: text",
                "company_url: url",
                "tags: list",
                "start: text",
                "end: text",
                "description: markdown",
              ]
            }
          ]
        },
        {
          name: "projects",
          type: "object",
          fields: [
            "title: text",
            {
              name: "items",
              type: "object-list",
              fields: [
                "title: text",
                "url: url",
                "tags: list",
                "description: markdown",
              ]
            }
          ]
        },
        {
          name: "tech",
          type: "object",
          fields: [
            "title: text",
            {
              name: "items",
              type: "object-list",
              fields: [
                "label: text",
                {
                  name: "icon",
                  description: "Icons from <a href='https://tabler.io/icons' target=_blank>tabler</a>",
                  type: "text",
                }
              ]
            }
          ]
        },
      ]
    }
  ],
});

cms.document({
  name: "Settings",
  icon: "gear",
  store: "src:index.vto",
  previewUrl: () => "/",
  fields: [
    "title: text",
    "lang: text",
  ]
})

cms.document({
  name: "Style",
  icon: "file-css",
  store: "src:style.css",
  previewUrl: () => "/",
})

cms.upload({
  name: "files",
  store: "src:files",
})

export default cms;
