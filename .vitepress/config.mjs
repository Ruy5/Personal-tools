import { defineConfig } from 'vitepress'
import { set_sidebar } from "./utils/auto_sidebar.mjs";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/Personal-tools/",
  head: [["link", { rel: "icon", href: "/logo.png" }]],
  title: "猹言猹语",
  description: "A VitePress Site",
  themeConfig: {
    outlineTitle: "目录",
    outline: "deep",
    logo: '/logo.png',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '博客', link: '/blog/test.html' }
      // { text: '博客', items: [
      //   { text: '前端', link: '/blog/blog1' },
      //   { text: '后端', link: '/blog/blog2' }
      // ] }
    ],

    sidebar: { "/blog": set_sidebar("blog") },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Ruy5' },
      { icon: {
        svg: '<svg t="1715018515548" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4275" width="16" height="16"><path d="M729.32864 373.94944c-9.79456-5.94432-19.06176-6.784-19.14368-6.784l-1.06496-0.0512c-57.20064-3.8656-121.1648-5.83168-190.12608-5.83168l-13.98784 0.00512c-68.95616 0-132.92544 1.96096-190.12096 5.83168l-1.06496 0.0512c-0.08192 0-9.34912 0.83968-19.14368 6.784-15.04768 9.12896-24.27392 25.94816-27.4176 49.9712-10.07104 76.91264-4.38272 173.64992 0.18944 251.392 2.93888 49.96608 33.408 62.45888 85.04832 67.1488 10.78272 0.98816 69.08928 5.86752 159.50848 5.89312v-0.00512c90.4192-0.02048 148.72576-4.90496 159.5136-5.888 51.64032-4.68992 82.10944-17.18272 85.0432-67.1488 4.57728-77.74208 10.26048-174.47936 0.18944-251.392-3.1488-24.02816-12.37504-40.84736-27.42272-49.97632z m-390.9888 172.71808a23.64928 23.64928 0 0 1-31.68768-10.84416 23.68 23.68 0 0 1 10.84416-31.68768c2.03776-1.00352 50.69312-24.72448 110.5408-43.06432a23.68 23.68 0 1 1 13.88032 45.29152c-56.2944 17.24928-103.11168 40.07424-103.5776 40.30464z m268.89728 35.88608c-0.44032 2.23232-11.26912 54.64064-50.93888 54.64064-21.44256 0-36.10112-14.04928-44.98432-26.77248-8.69376 12.70784-22.80448 26.77248-42.65472 26.77248-35.5328 0-50.13504-48.26624-51.68128-53.77024a11.3664 11.3664 0 0 1 21.87776-6.1696c2.74944 9.6512 14.1312 37.20192 29.7984 37.20192 16.37376 0 28.89216-23.64416 31.98464-31.92832a11.37152 11.37152 0 0 1 10.6496-7.38816h0.06144c4.76672 0.03072 9.0112 3.02592 10.62912 7.50592 0.10752 0.28672 11.96544 31.81568 34.31424 31.81568 20.864 0 28.56448-35.95264 28.64128-36.32128a11.34592 11.34592 0 0 1 13.35808-8.93952 11.36128 11.36128 0 0 1 8.94464 13.35296z m110.11584-46.73536a23.68 23.68 0 0 1-31.68256 10.84416c-0.47104-0.2304-47.47264-23.1168-103.57248-40.30976a23.69024 23.69024 0 0 1-15.70816-29.58336 23.66976 23.66976 0 0 1 29.57824-15.70304c59.84768 18.33984 108.49792 42.0608 110.55104 43.06432a23.68 23.68 0 0 1 10.83392 31.68768z" fill="#F16C8D" p-id="4276"></path><path d="M849.92 51.2H174.08c-67.8656 0-122.88 55.0144-122.88 122.88v675.84c0 67.87072 55.0144 122.88 122.88 122.88h675.84c67.87072 0 122.88-55.00928 122.88-122.88V174.08c0-67.86048-55.00928-122.88-122.88-122.88z m-36.60288 627.45088c-2.62656 44.57984-21.82144 78.63296-55.51616 98.48832-25.68192 15.13472-54.17472 19.48672-81.13664 21.9392-32.45568 2.94912-92.71808 6.09792-164.66432 6.1184-71.94112-0.02048-132.20864-3.16416-164.66432-6.1184-26.96192-2.45248-55.45472-6.80448-81.13152-21.9392-33.69472-19.85536-52.8896-53.90336-55.51104-98.4832-4.70528-80.13312-10.5728-179.85536 0.19456-262.10816C221.5424 335.16544 280.99072 311.57248 311.5008 310.37952a2482.64192 2482.64192 0 0 1 81.42336-4.08576c-7.53664-8.53504-19.88096-23.3216-28.81536-38.11328-13.73696-22.73792 8.52992-41.68704 8.52992-41.68704s23.68-20.36736 44.52864 5.21216c15.69792 19.26656 38.37952 55.99744 48.61952 72.95488l53.20704-0.21504c13.2608 0 26.33216 0.07168 39.2192 0.21504 10.24-16.95744 32.9216-53.6832 48.61952-72.95488 20.84352-25.57952 44.52864-5.21216 44.52864-5.21216s22.26176 18.94912 8.5248 41.68704c-8.9344 14.79168-21.27872 29.57824-28.81536 38.11328 28.35968 0.97792 55.56224 2.33984 81.42336 4.08064 30.5152 1.19808 89.9584 24.79104 100.61312 106.17344 10.7776 82.24768 4.9152 181.96992 0.20992 262.10304z" fill="#F16C8D" p-id="4277"></path></svg>'
      }, link: 'https://space.bilibili.com/700876062?spm_id_from=333.1007.0.0' },
      { icon: {
        svg: '<svg t="1715018800763" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5307" width="16" height="16"><path d="M199.111 0H824.89C934.684 0 1024 89.316 1024 199.111V824.89C1024 934.684 934.684 1024 824.889 1024H199.11C89.316 1024 0 934.684 0 824.889V199.11C0 89.316 89.316 0 199.111 0z" fill="#170B1A" p-id="5308"></path><path d="M511.431 302.08c0.569-64.284 0-128.569 0.569-192.853h131.413c-0.569 11.377 1.138 22.755 2.845 33.564h-96.711v522.24c0.569 22.187-5.12 44.373-15.93 63.716-17.066 29.582-48.924 50.062-83.057 52.906-21.618 1.707-43.804-2.275-63.147-13.084-14.79-7.965-27.306-19.342-36.977-32.996 33.564 18.774 77.368 17.067 109.795-3.982C491.52 712.25 512 675.84 512 638.293c-0.569-112.07-0.569-224.142-0.569-336.213z m216.747-36.978c18.204 11.378 38.684 20.48 59.733 25.031 12.516 2.845 25.031 3.983 38.116 3.983v29.582c-37.547-8.534-72.25-29.582-97.85-58.596z" fill="#25F4EE" p-id="5309"></path><path d="M274.773 428.942c47.218-29.582 104.676-41.529 159.29-33.564v31.289c-14.792 0.569-29.014 2.275-43.805 5.12-35.271 7.395-68.836 22.186-97.85 43.804-31.288 23.325-55.181 55.182-71.68 90.453-15.928 33.565-23.892 70.543-23.324 108.09 0 40.96 11.378 80.782 30.72 116.622 9.103 16.497 19.343 32.426 32.996 45.51-27.876-19.342-51.2-45.51-68.267-75.093-23.324-39.253-34.702-85.333-33.564-131.413 1.707-42.098 13.653-83.627 35.84-120.036 19.342-32.426 47.218-60.87 79.644-80.782z" fill="#25F4EE" p-id="5310"></path><path d="M549.547 142.791h97.28c3.413 18.773 10.24 36.409 18.773 53.476 13.653 26.169 32.996 49.493 58.027 64.853 1.706 1.138 2.844 2.276 3.982 3.982 25.6 29.014 60.302 50.062 98.418 58.596 0.569 34.133 0 68.835 0 102.969-64.285 0.569-128.57-19.911-180.907-57.458 0 81.92 0 163.84 0.569 245.76 0 10.809 0.569 21.618 0 32.995-2.845 39.823-15.36 79.076-35.271 113.778-17.067 30.151-40.391 56.89-68.267 77.37-35.84 26.737-80.213 41.528-124.587 42.666-22.755 0.569-45.51-0.57-67.697-5.69-31.29-6.826-60.871-19.91-87.04-38.115l-1.707-1.706c-13.084-13.085-23.893-29.014-32.996-45.511-19.342-35.272-30.72-75.663-30.72-116.623-0.568-36.977 7.396-74.524 23.325-108.089 16.498-35.27 40.96-67.128 71.68-90.453 29.013-21.618 62.578-36.409 97.849-43.804 14.222-2.845 29.013-4.551 43.804-5.12 0.57 13.084 0 26.169 0.57 38.684v66.56c-16.499-5.689-34.703-5.689-51.77-1.707-20.48 4.552-39.822 13.654-55.75 27.307-9.672 8.533-18.205 18.773-23.894 30.151-10.24 19.342-13.654 42.098-11.378 63.716 2.276 21.049 11.378 41.529 25.031 57.458 9.102 11.377 21.049 19.91 32.996 27.875 9.67 13.653 22.186 25.031 36.977 32.996 19.343 10.24 41.53 14.79 63.147 13.084 34.133-2.275 65.991-23.324 83.058-52.907 10.809-19.342 16.498-41.528 15.929-63.715 1.138-175.218 0.569-349.298 0.569-523.378z" fill="#FFFFFF" p-id="5311"></path><path d="M646.827 142.791c11.377 0.569 22.755 0 34.702 0 0 38.116 11.947 76.231 34.133 107.52 2.845 3.982 5.69 7.396 8.534 10.809-25.032-15.36-44.943-38.684-58.027-64.853-8.533-16.498-15.36-34.703-19.342-53.476z m179.2 180.907c12.515 2.844 25.03 3.982 38.115 3.982v132.551c-64.853 0.569-129.706-21.049-182.613-59.164v262.826c0.569 19.911-1.138 39.823-5.689 59.165-12.516 59.164-47.787 112.64-96.711 147.342-26.169 18.773-55.751 31.858-86.471 38.684-37.547 8.534-76.8 7.965-113.778-1.706-43.804-11.378-84.764-35.84-115.484-69.405 26.168 18.774 55.75 31.29 87.04 38.116 22.186 5.12 44.942 6.258 67.697 5.689 44.374-1.138 88.747-15.93 124.587-42.667 27.876-20.48 50.631-47.218 68.267-77.369 19.91-34.702 32.426-73.955 35.27-113.778 0.57-10.808 0.57-21.617 0-32.995-0.568-81.92-0.568-163.84-0.568-245.76 52.338 37.547 116.622 58.027 180.907 57.458-0.57-34.134 0-68.836-0.57-102.97z" fill="#FE2C55" p-id="5312"></path><path d="M434.631 426.098c12.516 0 25.6 0.569 38.116 2.275v135.965c-18.205-6.258-38.685-6.827-57.458-2.276-35.84 7.965-65.991 35.271-78.507 69.974-12.515 34.133-7.395 73.955 14.222 102.968-12.515-7.395-23.893-16.497-32.995-27.875-13.653-15.929-22.756-36.409-25.031-57.458-2.276-21.618 1.138-44.373 11.378-63.715 5.688-11.378 14.222-21.618 23.893-30.152 15.929-13.653 35.84-22.186 55.751-27.306 17.067-3.982 35.271-3.982 51.769 1.706v-66.56c-1.138-11.377-0.569-24.462-1.138-37.546z" fill="#FE2C55" p-id="5313"></path></svg>'
      }, link: 'https://www.douyin.com/user/MS4wLjABAAAAhTIhyMN2zDrnqDRUckCEUKIJs_i8518Mjw1FEkRJo34yU2GeBEmyGfO50-ksN7xK' }
    ],
    footer: {
      copyright: ".vitepress config.mjs 文件中 footer copyright 进行配置"
    },
    // 设置搜索框的样式
    search: {
      provider: "local",
      options: {
        translations: {
          button: {
            buttonText: "搜索文档",
            buttonAriaLabel: "搜索文档",
          },
          modal: {
            noResultsText: "无法找到相关结果",
            resetButtonTitle: "清除查询条件",
            footer: {
              selectText: "选择",
              navigateText: "切换",
            },
          },
        },
      },
    },
  },

})
