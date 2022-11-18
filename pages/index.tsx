import type { NextPage } from "next";
import Head from "next/head";
import Description from "../components/Description";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Table from "../components/Table";

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>
          Compare Staking Services | Pocket Network Staking Services
        </title>
        <link rel="icon" href="/logoart3x.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Example />

      {/* <Header />

      <main className="w-full mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <Table />

        <div className="mt-4 md:mt-8 lg:mt-12">
          <Description />
        </div>
      </main>

      <footer className="w-full">
        <Footer />
      </footer> */}
    </div>
  );
};

/* This example requires Tailwind CSS v3.0+ */
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { EnvelopeIcon } from "@heroicons/react/20/solid";
import { Icon } from "@iconify/react";

export function Example() {
  return (
    <div className="isolate ">
      <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]">
        <svg
          className="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]"
          viewBox="0 0 1155 678"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
            fillOpacity=".3"
            d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
          />
          <defs>
            <linearGradient
              id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
              x1="1155.49"
              x2="-78.208"
              y1=".177"
              y2="474.645"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#3A9D92" />
              <stop offset={1} stopColor="#FDD64C" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="px-6 pt-6 lg:px-8">
        <div></div>
      </div>
      <main>
        <div className="relative px-6 lg:px-8">
          <div className="mx-auto max-w-3xl pt-20 pb-32 sm:pt-48 sm:pb-40">
            <div>
              <div>
                <svg
                  width="364"
                  height="163"
                  viewBox="0 0 364 163"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mx-auto w-auto max-w-full h-96 mb-6"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M110.301 50.0461C100.858 59.489 100.858 74.7989 110.301 84.2418L112.738 86.6784C114.934 88.8753 118.496 88.8753 120.693 86.6784C122.89 84.4816 122.89 80.9199 120.693 78.723L118.256 76.2864C113.207 71.2372 113.207 63.0508 118.256 58.0015L124.671 51.5872L116.715 43.6318L110.301 50.0461Z"
                    fill="url(#paint0_linear_16_15)"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M123.046 37.3009C132.489 27.858 147.799 27.858 157.242 37.3009L159.678 39.7375C161.875 41.9343 161.875 45.496 159.678 47.6929C157.482 49.8897 153.92 49.8897 151.723 47.6929L149.286 45.2563C144.237 40.207 136.051 40.207 131.002 45.2563L124.587 51.6706L116.632 43.7152L123.046 37.3009Z"
                    fill="url(#paint1_linear_16_15)"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M253.699 71.6635C263.142 62.2206 263.142 46.9107 253.699 37.4678L251.263 35.0312C249.066 32.8343 245.504 32.8343 243.307 35.0312C241.11 37.228 241.11 40.7897 243.307 42.9866L245.744 45.4232C250.793 50.4724 250.793 58.6589 245.744 63.7081L239.33 70.1224L247.285 78.0778L253.699 71.6635Z"
                    fill="url(#paint2_linear_16_15)"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M240.954 84.4088C231.511 93.8517 216.201 93.8517 206.758 84.4088L204.322 81.9722C202.125 79.7754 202.125 76.2136 204.322 74.0168C206.519 71.82 210.08 71.82 212.277 74.0168L214.714 76.4534C219.763 81.5027 227.949 81.5027 232.999 76.4534L239.413 70.0391L247.368 77.9945L240.954 84.4088Z"
                    fill="url(#paint3_linear_16_15)"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M188.589 45.883C198.032 36.4401 213.342 36.4401 222.785 45.883L229.345 52.443C231.542 54.6399 231.542 58.2016 229.345 60.3984C227.148 62.5953 223.587 62.5953 221.39 60.3984L214.83 53.8384C209.78 48.7891 201.594 48.7891 196.545 53.8384L185.965 64.4178L178.01 56.4624L188.589 45.883Z"
                    fill="#D2ECFE"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M175.456 74.9555C166.013 84.3984 150.703 84.3984 141.261 74.9555L134.659 68.3537C132.462 66.1569 132.462 62.5952 134.659 60.3983C136.856 58.2015 140.417 58.2015 142.614 60.3983L149.216 67.0001C154.265 72.0493 162.452 72.0493 167.501 67.0001L178.08 56.4206L186.036 64.376L175.456 74.9555Z"
                    fill="#D2ECFE"
                  />
                  <path
                    d="M0.82274 142.802C0.82274 141.098 1.16555 139.609 1.85116 138.336C2.55637 137.062 3.52603 136.083 4.76014 135.397C6.01384 134.712 7.44384 134.369 9.05014 134.369C11.107 134.369 12.821 134.908 14.1923 135.985C15.5831 137.062 16.494 138.581 16.9249 140.539H11.5771C11.1266 139.286 10.2549 138.659 8.96199 138.659C8.0413 138.659 7.30671 139.021 6.75822 139.746C6.20973 140.451 5.93548 141.47 5.93548 142.802C5.93548 144.134 6.20973 145.162 6.75822 145.887C7.30671 146.592 8.0413 146.945 8.96199 146.945C10.2549 146.945 11.1266 146.318 11.5771 145.065H16.9249C16.494 146.984 15.5831 148.493 14.1923 149.59C12.8014 150.687 11.0874 151.235 9.05014 151.235C7.44384 151.235 6.01384 150.892 4.76014 150.207C3.52603 149.521 2.55637 148.542 1.85116 147.268C1.16555 145.995 0.82274 144.506 0.82274 142.802ZM27.076 151.235C25.4697 151.235 24.0201 150.892 22.7273 150.207C21.454 149.521 20.4451 148.542 19.7008 147.268C18.976 145.995 18.6136 144.506 18.6136 142.802C18.6136 141.117 18.9858 139.638 19.7301 138.365C20.4745 137.072 21.4932 136.083 22.786 135.397C24.0789 134.712 25.5285 134.369 27.1348 134.369C28.7411 134.369 30.1907 134.712 31.4836 135.397C32.7764 136.083 33.7951 137.072 34.5395 138.365C35.2838 139.638 35.656 141.117 35.656 142.802C35.656 144.487 35.274 145.975 34.5101 147.268C33.7657 148.542 32.7373 149.521 31.4248 150.207C30.1319 150.892 28.6823 151.235 27.076 151.235ZM27.076 146.886C28.0359 146.886 28.8488 146.534 29.5149 145.828C30.2005 145.123 30.5433 144.114 30.5433 142.802C30.5433 141.49 30.2103 140.481 29.5443 139.775C28.8978 139.07 28.0947 138.718 27.1348 138.718C26.1553 138.718 25.3424 139.07 24.696 139.775C24.0495 140.461 23.7263 141.47 23.7263 142.802C23.7263 144.114 24.0397 145.123 24.6666 145.828C25.313 146.534 26.1162 146.886 27.076 146.886ZM59.2428 134.428C61.28 134.428 62.8961 135.045 64.0911 136.279C65.3056 137.513 65.9128 139.227 65.9128 141.421V151H60.9176V142.097C60.9176 141.039 60.6336 140.226 60.0655 139.658C59.517 139.07 58.753 138.776 57.7736 138.776C56.7941 138.776 56.0204 139.07 55.4523 139.658C54.9038 140.226 54.6296 141.039 54.6296 142.097V151H49.6343V142.097C49.6343 141.039 49.3503 140.226 48.7822 139.658C48.2337 139.07 47.4698 138.776 46.4903 138.776C45.5109 138.776 44.7371 139.07 44.169 139.658C43.6205 140.226 43.3463 141.039 43.3463 142.097V151H38.3217V134.604H43.3463V136.661C43.8556 135.975 44.5216 135.437 45.3443 135.045C46.1671 134.633 47.0976 134.428 48.1358 134.428C49.3699 134.428 50.4669 134.692 51.4267 135.221C52.4062 135.75 53.1702 136.504 53.7187 137.484C54.2867 136.582 55.0605 135.848 56.04 135.28C57.0194 134.712 58.087 134.428 59.2428 134.428ZM74.4515 136.925C74.9412 136.161 75.6171 135.544 76.479 135.074C77.3409 134.604 78.3497 134.369 79.5055 134.369C80.8571 134.369 82.0815 134.712 83.1784 135.397C84.2754 136.083 85.1373 137.062 85.7642 138.336C86.4106 139.609 86.7338 141.088 86.7338 142.773C86.7338 144.457 86.4106 145.946 85.7642 147.239C85.1373 148.512 84.2754 149.501 83.1784 150.207C82.0815 150.892 80.8571 151.235 79.5055 151.235C78.3693 151.235 77.3605 151 76.479 150.53C75.6171 150.06 74.9412 149.452 74.4515 148.708V158.816H69.4269V134.604H74.4515V136.925ZM81.6211 142.773C81.6211 141.519 81.2685 140.539 80.5633 139.834C79.8777 139.109 79.0256 138.747 78.0069 138.747C77.0079 138.747 76.1558 139.109 75.4506 139.834C74.7649 140.559 74.4221 141.548 74.4221 142.802C74.4221 144.056 74.7649 145.045 75.4506 145.77C76.1558 146.495 77.0079 146.857 78.0069 146.857C79.006 146.857 79.8581 146.495 80.5633 145.77C81.2685 145.025 81.6211 144.026 81.6211 142.773ZM88.3708 142.773C88.3708 141.088 88.6843 139.609 89.3111 138.336C89.9575 137.062 90.8293 136.083 91.9262 135.397C93.0232 134.712 94.2475 134.369 95.5992 134.369C96.7549 134.369 97.7638 134.604 98.6257 135.074C99.5072 135.544 100.183 136.161 100.653 136.925V134.604H105.678V151H100.653V148.679C100.163 149.443 99.4778 150.06 98.5963 150.53C97.7344 151 96.7256 151.235 95.5698 151.235C94.2378 151.235 93.0232 150.892 91.9262 150.207C90.8293 149.501 89.9575 148.512 89.3111 147.239C88.6843 145.946 88.3708 144.457 88.3708 142.773ZM100.653 142.802C100.653 141.548 100.301 140.559 99.5954 139.834C98.9097 139.109 98.0674 138.747 97.0684 138.747C96.0693 138.747 95.2172 139.109 94.512 139.834C93.8264 140.539 93.4836 141.519 93.4836 142.773C93.4836 144.026 93.8264 145.025 94.512 145.77C95.2172 146.495 96.0693 146.857 97.0684 146.857C98.0674 146.857 98.9097 146.495 99.5954 145.77C100.301 145.045 100.653 144.056 100.653 142.802ZM114.337 137.337C114.925 136.436 115.66 135.73 116.541 135.221C117.423 134.692 118.402 134.428 119.48 134.428V139.746H118.099C116.845 139.746 115.905 140.02 115.278 140.569C114.651 141.098 114.337 142.038 114.337 143.39V151H109.313V134.604H114.337V137.337ZM137.337 142.538C137.337 143.008 137.308 143.497 137.249 144.007H125.877C125.956 145.025 126.279 145.809 126.847 146.357C127.435 146.886 128.15 147.151 128.992 147.151C130.246 147.151 131.117 146.622 131.607 145.564H136.955C136.681 146.641 136.181 147.611 135.456 148.473C134.751 149.335 133.86 150.011 132.782 150.5C131.705 150.99 130.5 151.235 129.168 151.235C127.562 151.235 126.132 150.892 124.878 150.207C123.625 149.521 122.645 148.542 121.94 147.268C121.235 145.995 120.882 144.506 120.882 142.802C120.882 141.098 121.225 139.609 121.911 138.336C122.616 137.062 123.595 136.083 124.849 135.397C126.103 134.712 127.542 134.369 129.168 134.369C130.755 134.369 132.165 134.702 133.4 135.368C134.634 136.034 135.594 136.984 136.279 138.218C136.984 139.452 137.337 140.892 137.337 142.538ZM132.195 141.215C132.195 140.353 131.901 139.668 131.313 139.158C130.726 138.649 129.991 138.394 129.11 138.394C128.267 138.394 127.552 138.639 126.965 139.129C126.396 139.619 126.044 140.314 125.907 141.215H132.195Z"
                    fill="#FDD64C"
                  />
                  <path
                    d="M148.012 151.235C146.17 151.235 144.662 150.814 143.487 149.972C142.331 149.11 141.684 147.944 141.547 146.475H143.663C143.761 147.376 144.182 148.111 144.926 148.679C145.69 149.227 146.709 149.501 147.982 149.501C149.099 149.501 149.971 149.237 150.598 148.708C151.244 148.179 151.567 147.523 151.567 146.739C151.567 146.191 151.391 145.74 151.038 145.388C150.686 145.035 150.235 144.761 149.687 144.565C149.158 144.35 148.433 144.124 147.512 143.889C146.317 143.576 145.348 143.262 144.603 142.949C143.859 142.635 143.222 142.175 142.693 141.568C142.184 140.941 141.929 140.108 141.929 139.07C141.929 138.287 142.164 137.562 142.635 136.896C143.105 136.23 143.771 135.701 144.633 135.309C145.495 134.917 146.474 134.722 147.571 134.722C149.295 134.722 150.686 135.162 151.743 136.044C152.801 136.906 153.369 138.101 153.448 139.629H151.391C151.332 138.688 150.96 137.934 150.274 137.366C149.608 136.778 148.688 136.485 147.512 136.485C146.474 136.485 145.632 136.729 144.985 137.219C144.339 137.709 144.016 138.316 144.016 139.041C144.016 139.668 144.202 140.187 144.574 140.598C144.966 140.99 145.446 141.303 146.014 141.538C146.582 141.754 147.346 141.999 148.306 142.273C149.461 142.587 150.382 142.89 151.068 143.184C151.753 143.478 152.341 143.909 152.831 144.477C153.32 145.045 153.575 145.799 153.595 146.739C153.595 147.601 153.36 148.375 152.889 149.061C152.419 149.727 151.763 150.256 150.921 150.647C150.078 151.039 149.109 151.235 148.012 151.235ZM160.14 136.69V146.651C160.14 147.631 160.326 148.307 160.699 148.679C161.071 149.051 161.727 149.237 162.667 149.237H164.548V151H162.344C160.894 151 159.817 150.667 159.112 150.001C158.407 149.315 158.054 148.199 158.054 146.651V136.69H155.821V134.957H158.054V130.931H160.14V134.957H164.548V136.69H160.14ZM167 142.949C167 141.303 167.323 139.864 167.969 138.63C168.635 137.376 169.546 136.416 170.702 135.75C171.877 135.064 173.2 134.722 174.669 134.722C176.197 134.722 177.509 135.074 178.606 135.779C179.723 136.485 180.526 137.386 181.016 138.483V134.957H183.073V151H181.016V147.445C180.506 148.542 179.693 149.452 178.577 150.177C177.48 150.882 176.167 151.235 174.639 151.235C173.19 151.235 171.877 150.892 170.702 150.207C169.546 149.521 168.635 148.551 167.969 147.298C167.323 146.044 167 144.594 167 142.949ZM181.016 142.978C181.016 141.685 180.751 140.549 180.222 139.57C179.693 138.59 178.969 137.836 178.048 137.307C177.147 136.778 176.148 136.514 175.051 136.514C173.915 136.514 172.896 136.769 171.995 137.278C171.094 137.787 170.379 138.532 169.85 139.511C169.341 140.471 169.086 141.617 169.086 142.949C169.086 144.261 169.341 145.417 169.85 146.416C170.379 147.396 171.094 148.15 171.995 148.679C172.896 149.188 173.915 149.443 175.051 149.443C176.148 149.443 177.147 149.178 178.048 148.649C178.969 148.12 179.693 147.366 180.222 146.387C180.751 145.407 181.016 144.271 181.016 142.978ZM196.436 151L189.825 143.801V151H187.768V129.256H189.825V142.126L196.289 134.957H199.169L191.559 142.949L199.228 151H196.436ZM202.914 131.93C202.503 131.93 202.151 131.783 201.857 131.489C201.563 131.195 201.416 130.833 201.416 130.402C201.416 129.971 201.563 129.619 201.857 129.344C202.151 129.05 202.503 128.904 202.914 128.904C203.326 128.904 203.678 129.05 203.972 129.344C204.266 129.619 204.413 129.971 204.413 130.402C204.413 130.833 204.266 131.195 203.972 131.489C203.678 131.783 203.326 131.93 202.914 131.93ZM203.943 134.957V151H201.886V134.957H203.943ZM216.123 134.663C218.043 134.663 219.61 135.26 220.824 136.455C222.039 137.63 222.646 139.345 222.646 141.597V151H220.619V141.832C220.619 140.089 220.178 138.757 219.296 137.836C218.434 136.915 217.249 136.455 215.741 136.455C214.193 136.455 212.959 136.945 212.039 137.924C211.118 138.904 210.658 140.344 210.658 142.244V151H208.601V134.957H210.658V137.689C211.167 136.71 211.901 135.965 212.861 135.456C213.821 134.927 214.908 134.663 216.123 134.663ZM233.924 134.722C235.432 134.722 236.745 135.074 237.861 135.779C238.978 136.485 239.781 137.376 240.271 138.453V134.957H242.327V151.411C242.327 152.881 242.004 154.183 241.358 155.319C240.731 156.456 239.849 157.327 238.713 157.935C237.577 158.561 236.284 158.875 234.835 158.875C232.778 158.875 231.064 158.385 229.693 157.406C228.341 156.426 227.499 155.094 227.166 153.409H229.193C229.546 154.526 230.212 155.417 231.191 156.083C232.19 156.749 233.405 157.082 234.835 157.082C235.873 157.082 236.803 156.857 237.626 156.407C238.449 155.976 239.095 155.329 239.565 154.467C240.036 153.605 240.271 152.587 240.271 151.411V147.445C239.761 148.542 238.948 149.452 237.832 150.177C236.735 150.882 235.432 151.235 233.924 151.235C232.455 151.235 231.132 150.892 229.957 150.207C228.801 149.521 227.89 148.551 227.224 147.298C226.578 146.044 226.255 144.594 226.255 142.949C226.255 141.303 226.578 139.864 227.224 138.63C227.89 137.376 228.801 136.416 229.957 135.75C231.132 135.064 232.455 134.722 233.924 134.722ZM240.271 142.978C240.271 141.685 240.006 140.549 239.477 139.57C238.948 138.59 238.224 137.836 237.303 137.307C236.402 136.778 235.403 136.514 234.306 136.514C233.17 136.514 232.151 136.769 231.25 137.278C230.349 137.787 229.634 138.532 229.105 139.511C228.596 140.471 228.341 141.617 228.341 142.949C228.341 144.261 228.596 145.417 229.105 146.416C229.634 147.396 230.349 148.15 231.25 148.679C232.151 149.188 233.17 149.443 234.306 149.443C235.403 149.443 236.402 149.178 237.303 148.649C238.224 148.12 238.948 147.366 239.477 146.387C240.006 145.407 240.271 144.271 240.271 142.978Z"
                    fill="#D2ECFE"
                  />
                  <path
                    d="M252.888 151.235C251.047 151.235 249.539 150.814 248.363 149.972C247.208 149.11 246.561 147.944 246.424 146.475H248.54C248.638 147.376 249.059 148.111 249.803 148.679C250.567 149.227 251.586 149.501 252.859 149.501C253.976 149.501 254.847 149.237 255.474 148.708C256.121 148.179 256.444 147.523 256.444 146.739C256.444 146.191 256.268 145.74 255.915 145.388C255.562 145.035 255.112 144.761 254.563 144.565C254.034 144.35 253.31 144.124 252.389 143.889C251.194 143.576 250.224 143.262 249.48 142.949C248.736 142.635 248.099 142.175 247.57 141.568C247.061 140.941 246.806 140.108 246.806 139.07C246.806 138.287 247.041 137.562 247.511 136.896C247.981 136.23 248.647 135.701 249.509 135.309C250.371 134.917 251.351 134.722 252.448 134.722C254.172 134.722 255.562 135.162 256.62 136.044C257.678 136.906 258.246 138.101 258.324 139.629H256.268C256.209 138.688 255.837 137.934 255.151 137.366C254.485 136.778 253.564 136.485 252.389 136.485C251.351 136.485 250.508 136.729 249.862 137.219C249.216 137.709 248.892 138.316 248.892 139.041C248.892 139.668 249.078 140.187 249.451 140.598C249.842 140.99 250.322 141.303 250.89 141.538C251.458 141.754 252.222 141.999 253.182 142.273C254.338 142.587 255.259 142.89 255.944 143.184C256.63 143.478 257.218 143.909 257.707 144.477C258.197 145.045 258.452 145.799 258.471 146.739C258.471 147.601 258.236 148.375 257.766 149.061C257.296 149.727 256.64 150.256 255.797 150.647C254.955 151.039 253.985 151.235 252.888 151.235ZM276.859 142.156C276.859 142.861 276.839 143.399 276.8 143.772H263.489C263.548 144.986 263.842 146.024 264.371 146.886C264.899 147.748 265.595 148.404 266.457 148.855C267.319 149.286 268.259 149.501 269.278 149.501C270.61 149.501 271.726 149.178 272.627 148.532C273.548 147.885 274.155 147.014 274.449 145.917H276.623C276.232 147.484 275.389 148.767 274.097 149.766C272.823 150.745 271.217 151.235 269.278 151.235C267.769 151.235 266.418 150.902 265.223 150.236C264.028 149.55 263.087 148.591 262.402 147.356C261.736 146.103 261.403 144.643 261.403 142.978C261.403 141.313 261.736 139.854 262.402 138.6C263.068 137.346 263.998 136.387 265.193 135.721C266.388 135.055 267.75 134.722 269.278 134.722C270.806 134.722 272.138 135.055 273.274 135.721C274.43 136.387 275.311 137.288 275.918 138.424C276.545 139.54 276.859 140.784 276.859 142.156ZM274.772 142.097C274.792 140.902 274.547 139.883 274.038 139.041C273.548 138.199 272.872 137.562 272.01 137.131C271.148 136.7 270.208 136.485 269.189 136.485C267.662 136.485 266.359 136.974 265.281 137.954C264.204 138.933 263.607 140.314 263.489 142.097H274.772ZM282.679 137.807C283.129 136.808 283.815 136.034 284.735 135.485C285.676 134.937 286.822 134.663 288.173 134.663V136.808H287.615C286.126 136.808 284.931 137.209 284.03 138.012C283.129 138.816 282.679 140.157 282.679 142.038V151H280.622V134.957H282.679V137.807ZM296.968 149.002L302.375 134.957H304.549L298.114 151H295.793L289.358 134.957H291.561L296.968 149.002ZM308.365 131.93C307.954 131.93 307.601 131.783 307.307 131.489C307.013 131.195 306.867 130.833 306.867 130.402C306.867 129.971 307.013 129.619 307.307 129.344C307.601 129.05 307.954 128.904 308.365 128.904C308.776 128.904 309.129 129.05 309.423 129.344C309.717 129.619 309.864 129.971 309.864 130.402C309.864 130.833 309.717 131.195 309.423 131.489C309.129 131.783 308.776 131.93 308.365 131.93ZM309.394 134.957V151H307.337V134.957H309.394ZM313.111 142.978C313.111 141.313 313.444 139.864 314.11 138.63C314.776 137.376 315.697 136.416 316.872 135.75C318.047 135.064 319.389 134.722 320.898 134.722C322.876 134.722 324.502 135.211 325.775 136.191C327.068 137.17 327.901 138.502 328.273 140.187H326.069C325.795 139.031 325.197 138.13 324.277 137.484C323.376 136.818 322.249 136.485 320.898 136.485C319.82 136.485 318.851 136.729 317.989 137.219C317.127 137.709 316.441 138.443 315.932 139.423C315.442 140.383 315.197 141.568 315.197 142.978C315.197 144.389 315.442 145.584 315.932 146.563C316.441 147.543 317.127 148.277 317.989 148.767C318.851 149.257 319.82 149.501 320.898 149.501C322.249 149.501 323.376 149.178 324.277 148.532C325.197 147.866 325.795 146.945 326.069 145.77H328.273C327.901 147.415 327.068 148.737 325.775 149.737C324.482 150.736 322.857 151.235 320.898 151.235C319.389 151.235 318.047 150.902 316.872 150.236C315.697 149.55 314.776 148.591 314.11 147.356C313.444 146.103 313.111 144.643 313.111 142.978ZM346.587 142.156C346.587 142.861 346.568 143.399 346.528 143.772H333.218C333.276 144.986 333.57 146.024 334.099 146.886C334.628 147.748 335.323 148.404 336.185 148.855C337.047 149.286 337.988 149.501 339.006 149.501C340.338 149.501 341.455 149.178 342.356 148.532C343.277 147.885 343.884 147.014 344.178 145.917H346.352C345.96 147.484 345.118 148.767 343.825 149.766C342.552 150.745 340.945 151.235 339.006 151.235C337.498 151.235 336.146 150.902 334.951 150.236C333.756 149.55 332.816 148.591 332.13 147.356C331.464 146.103 331.131 144.643 331.131 142.978C331.131 141.313 331.464 139.854 332.13 138.6C332.796 137.346 333.727 136.387 334.922 135.721C336.117 135.055 337.478 134.722 339.006 134.722C340.534 134.722 341.866 135.055 343.002 135.721C344.158 136.387 345.04 137.288 345.647 138.424C346.274 139.54 346.587 140.784 346.587 142.156ZM344.501 142.097C344.52 140.902 344.276 139.883 343.766 139.041C343.277 138.199 342.601 137.562 341.739 137.131C340.877 136.7 339.937 136.485 338.918 136.485C337.39 136.485 336.087 136.974 335.01 137.954C333.933 138.933 333.335 140.314 333.218 142.097H344.501ZM355.874 151.235C354.033 151.235 352.525 150.814 351.349 149.972C350.194 149.11 349.547 147.944 349.41 146.475H351.526C351.624 147.376 352.045 148.111 352.789 148.679C353.553 149.227 354.572 149.501 355.845 149.501C356.962 149.501 357.833 149.237 358.46 148.708C359.107 148.179 359.43 147.523 359.43 146.739C359.43 146.191 359.254 145.74 358.901 145.388C358.548 145.035 358.098 144.761 357.549 144.565C357.02 144.35 356.296 144.124 355.375 143.889C354.18 143.576 353.21 143.262 352.466 142.949C351.722 142.635 351.085 142.175 350.556 141.568C350.047 140.941 349.792 140.108 349.792 139.07C349.792 138.287 350.027 137.562 350.497 136.896C350.967 136.23 351.633 135.701 352.495 135.309C353.357 134.917 354.337 134.722 355.434 134.722C357.157 134.722 358.548 135.162 359.606 136.044C360.664 136.906 361.232 138.101 361.31 139.629H359.254C359.195 138.688 358.823 137.934 358.137 137.366C357.471 136.778 356.55 136.485 355.375 136.485C354.337 136.485 353.494 136.729 352.848 137.219C352.201 137.709 351.878 138.316 351.878 139.041C351.878 139.668 352.064 140.187 352.437 140.598C352.828 140.99 353.308 141.303 353.876 141.538C354.444 141.754 355.208 141.999 356.168 142.273C357.324 142.587 358.245 142.89 358.93 143.184C359.616 143.478 360.204 143.909 360.693 144.477C361.183 145.045 361.438 145.799 361.457 146.739C361.457 147.601 361.222 148.375 360.752 149.061C360.282 149.727 359.626 150.256 358.783 150.647C357.941 151.039 356.971 151.235 355.874 151.235Z"
                    fill="#3A9D92"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_16_15"
                      x1="133.437"
                      y1="30.2187"
                      x2="133.437"
                      y2="90.6561"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#FDD64B" />
                      <stop offset="1" stop-color="#FDC04B" />
                    </linearGradient>
                    <linearGradient
                      id="paint1_linear_16_15"
                      x1="133.437"
                      y1="30.2187"
                      x2="133.437"
                      y2="90.6561"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#FDD64B" />
                      <stop offset="1" stop-color="#FDC04B" />
                    </linearGradient>
                    <linearGradient
                      id="paint2_linear_16_15"
                      x1="230.563"
                      y1="31.0535"
                      x2="230.563"
                      y2="91.491"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#3E936F" />
                      <stop offset="1" stop-color="#389E98" />
                    </linearGradient>
                    <linearGradient
                      id="paint3_linear_16_15"
                      x1="230.563"
                      y1="31.0535"
                      x2="230.563"
                      y2="91.491"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#3E936F" />
                      <stop offset="1" stop-color="#389E98" />
                    </linearGradient>
                  </defs>
                </svg>
                <h1 className="text-4xl font-bold tracking-tight text-center sm:text-4xl text-[#D2ECFE]">
                  COMING SOON
                </h1>
                <p className="mt-6 text-lg leading-8 text-center">
                  For more info
                  <br />
                  <a
                    href="https://t.me/CompareStakingServices"
                    className="inline-flex items-center rounded-md border border-transparent bg-[#3A9D92] px-6 py-3 text-base font-medium text-[#D2ECFE] shadow-sm hover:bg-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
                  >
                    <Icon icon="bxl:telegram" width={32} height={32} />
                    Join our Telegram
                  </a>
                </p>{" "}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Home;
