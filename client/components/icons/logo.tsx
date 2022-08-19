import { Icon, IconProps } from "@chakra-ui/react";
import React from "react";

const Logo = (props: IconProps) => {
  return (
    <Icon
      width="103px"
      height="58px"
      viewBox="0 0 103 58"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M1.132 52.6316V41.471H2.82203V46.2541H8.22694V41.471H9.91697V52.6316H8.22694V47.6412H2.82203V52.6316H1.132ZM16.7785 52.8229C16.0026 52.8229 15.3117 52.6529 14.7058 52.3127C14.1106 51.962 13.6429 51.4783 13.3028 50.8618C12.9626 50.2454 12.7926 49.5279 12.7926 48.7094C12.7926 47.8804 12.9573 47.1523 13.2868 46.5252C13.627 45.898 14.0946 45.4091 14.6899 45.0583C15.2957 44.7076 15.9972 44.5322 16.7944 44.5322C17.5704 44.5322 18.2453 44.7076 18.8193 45.0583C19.3932 45.3985 19.8397 45.8555 20.1585 46.4295C20.4774 47.0035 20.6369 47.6359 20.6369 48.3268C20.6369 48.4331 20.6315 48.55 20.6209 48.6776C20.6209 48.7945 20.6156 48.9273 20.605 49.0762H14.4507C14.5039 49.8414 14.7536 50.426 15.2001 50.83C15.6571 51.2232 16.1833 51.4199 16.7785 51.4199C17.2568 51.4199 17.6554 51.3136 17.9743 51.101C18.3038 50.8778 18.5482 50.5802 18.7077 50.2082H20.3977C20.1851 50.9522 19.76 51.574 19.1222 52.0736C18.4951 52.5731 17.7138 52.8229 16.7785 52.8229ZM16.7785 45.9193C16.2151 45.9193 15.7156 46.0894 15.2798 46.4295C14.844 46.759 14.5783 47.2586 14.4826 47.9282H18.9468C18.9149 47.3117 18.697 46.8228 18.2931 46.4614C17.8892 46.1 17.3843 45.9193 16.7785 45.9193ZM23.347 52.6316V41.1521H25.0371V52.6316H23.347ZM28.1339 56.1392V44.7235H29.6485L29.8239 45.9512C30.079 45.5792 30.4298 45.2497 30.8762 44.9627C31.3226 44.6757 31.8966 44.5322 32.5981 44.5322C33.3634 44.5322 34.0384 44.7129 34.623 45.0743C35.2076 45.4357 35.6646 45.9299 35.9941 46.557C36.3342 47.1842 36.5043 47.8963 36.5043 48.6935C36.5043 49.4907 36.3342 50.2028 35.9941 50.83C35.6646 51.4464 35.2076 51.9354 34.623 52.2968C34.0384 52.6475 33.3581 52.8229 32.5822 52.8229C31.9657 52.8229 31.4183 52.7007 30.94 52.4562C30.4723 52.2117 30.1003 51.8663 29.8239 51.4199V56.1392H28.1339ZM32.2952 51.3561C33.018 51.3561 33.6132 51.1116 34.0809 50.6227C34.5486 50.1231 34.7824 49.4747 34.7824 48.6776C34.7824 48.1567 34.6761 47.6944 34.4635 47.2905C34.2509 46.8866 33.9586 46.573 33.5866 46.3498C33.2146 46.1159 32.7841 45.999 32.2952 45.999C31.5724 45.999 30.9772 46.2488 30.5095 46.7484C30.0524 47.2479 29.8239 47.891 29.8239 48.6776C29.8239 49.4747 30.0524 50.1231 30.5095 50.6227C30.9772 51.1116 31.5724 51.3561 32.2952 51.3561ZM39.3526 52.6316V41.471H41.3456L45.1242 48.9008L48.8869 41.471H50.8799V52.6316H49.1899V44.3887L45.7779 51.0372H44.4705L41.0427 44.4047V52.6316H39.3526ZM57.7394 52.8229C56.9635 52.8229 56.2726 52.6529 55.6667 52.3127C55.0715 51.962 54.6038 51.4783 54.2637 50.8618C53.9236 50.2454 53.7535 49.5279 53.7535 48.7094C53.7535 47.8804 53.9183 47.1523 54.2478 46.5252C54.5879 45.898 55.0556 45.4091 55.6508 45.0583C56.2567 44.7076 56.9582 44.5322 57.7554 44.5322C58.5313 44.5322 59.2062 44.7076 59.7802 45.0583C60.3542 45.3985 60.8006 45.8555 61.1195 46.4295C61.4384 47.0035 61.5978 47.6359 61.5978 48.3268C61.5978 48.4331 61.5925 48.55 61.5819 48.6776C61.5819 48.7945 61.5765 48.9273 61.5659 49.0762H55.4117C55.4648 49.8414 55.7146 50.426 56.161 50.83C56.6181 51.2232 57.1442 51.4199 57.7394 51.4199C58.2177 51.4199 58.6163 51.3136 58.9352 51.101C59.2647 50.8778 59.5092 50.5802 59.6686 50.2082H61.3586C61.1461 50.9522 60.7209 51.574 60.0832 52.0736C59.456 52.5731 58.6748 52.8229 57.7394 52.8229ZM57.7394 45.9193C57.1761 45.9193 56.6765 46.0894 56.2407 46.4295C55.8049 46.759 55.5392 47.2586 55.4435 47.9282H59.9078C59.8759 47.3117 59.658 46.8228 59.2541 46.4614C58.8502 46.1 58.3453 45.9193 57.7394 45.9193ZM63.6543 52.6316L67.7678 41.471H69.6172L73.6988 52.6316H71.9131L70.9565 49.9052H66.3966L65.44 52.6316H63.6543ZM66.8749 48.566H70.4782L68.6765 43.4799L66.8749 48.566ZM76.148 52.6316V41.1521H77.8381V52.6316H76.148ZM84.6338 52.8229C83.8579 52.8229 83.167 52.6529 82.5611 52.3127C81.9659 51.962 81.4982 51.4783 81.1581 50.8618C80.818 50.2454 80.6479 49.5279 80.6479 48.7094C80.6479 47.8804 80.8126 47.1523 81.1421 46.5252C81.4823 45.898 81.95 45.4091 82.5452 45.0583C83.151 44.7076 83.8526 44.5322 84.6498 44.5322C85.4257 44.5322 86.1006 44.7076 86.6746 45.0583C87.2486 45.3985 87.695 45.8555 88.0139 46.4295C88.3327 47.0035 88.4922 47.6359 88.4922 48.3268C88.4922 48.4331 88.4869 48.55 88.4762 48.6776C88.4762 48.7945 88.4709 48.9273 88.4603 49.0762H82.306C82.3592 49.8414 82.609 50.426 83.0554 50.83C83.5124 51.2232 84.0386 51.4199 84.6338 51.4199C85.1121 51.4199 85.5107 51.3136 85.8296 51.101C86.1591 50.8778 86.4036 50.5802 86.563 50.2082H88.253C88.0404 50.9522 87.6153 51.574 86.9775 52.0736C86.3504 52.5731 85.5692 52.8229 84.6338 52.8229ZM84.6338 45.9193C84.0705 45.9193 83.5709 46.0894 83.1351 46.4295C82.6993 46.759 82.4336 47.2586 82.3379 47.9282H86.8021C86.7703 47.3117 86.5524 46.8228 86.1485 46.4614C85.7446 46.1 85.2397 45.9193 84.6338 45.9193ZM91.2024 52.6316V44.7235H92.717L92.8605 46.2222C93.1369 45.7014 93.5195 45.2922 94.0084 44.9946C94.508 44.6863 95.1086 44.5322 95.8101 44.5322V46.3019H95.3477C94.88 46.3019 94.4602 46.3817 94.0882 46.5411C93.7268 46.6899 93.4345 46.9503 93.2113 47.3223C92.9987 47.6837 92.8924 48.1886 92.8924 48.837V52.6316H91.2024ZM101.532 52.6316C100.756 52.6316 100.14 52.4456 99.6825 52.0736C99.2255 51.6909 98.997 51.016 98.997 50.0487V46.1425H97.6417V44.7235H98.997L99.2042 42.7146H100.687V44.7235H102.919V46.1425H100.687V50.0487C100.687 50.4845 100.777 50.7874 100.958 50.9575C101.149 51.1169 101.474 51.1967 101.931 51.1967H102.839V52.6316H101.532Z"
        fill="currentColor"
      />
      <g clip-path="url(#clip0_258_1820)">
        <path
          d="M52.3159 13.3318C47.3352 13.3318 43.2979 17.3692 43.2979 22.3498V32.0126H61.3338V22.3498C61.3338 17.3692 57.2964 13.3318 52.3159 13.3318Z"
          fill="currentColor"
        />
        <path
          d="M55.4412 13.8884C54.4675 13.5286 53.4147 13.3318 52.3159 13.3318C47.3352 13.3318 43.2979 17.3692 43.2979 22.3498V32.0126H49.5488V22.3499C49.5488 18.4682 52.0012 15.1595 55.4412 13.8884Z"
          fill="currentColor"
        />
        <path
          d="M40.005 22.102H35.0537C34.4718 22.102 34 21.6302 34 21.0483C34 20.4663 34.4718 19.9946 35.0537 19.9946H40.0049C40.5868 19.9946 41.0586 20.4664 41.0586 21.0483C41.0587 21.6302 40.5868 22.102 40.005 22.102Z"
          fill="currentColor"
        />
        <path
          d="M69.578 22.1019H64.6268C64.0448 22.1019 63.5731 21.6302 63.5731 21.0483C63.5731 20.4663 64.0448 19.9946 64.6268 19.9946H69.5779C70.16 19.9946 70.6316 20.4664 70.6316 21.0483C70.6317 21.6302 70.16 22.1019 69.578 22.1019Z"
          fill="currentColor"
        />
        <path
          d="M65.2672 9.5868L61.7661 13.0879C61.3545 13.4994 60.6874 13.4994 60.2761 13.0879C59.8644 12.6765 59.8644 12.0094 60.2761 11.5978L63.7771 8.09671C64.1886 7.68518 64.8557 7.68525 65.2672 8.09671C65.6787 8.50824 65.6787 9.17534 65.2672 9.5868Z"
          fill="currentColor"
        />
        <path
          d="M53.3696 3.78584V8.73719C53.3696 9.31915 52.8977 9.79085 52.3159 9.79085C51.734 9.79078 51.2623 9.31915 51.2623 8.73719V3.78584C51.2623 3.20395 51.734 2.73232 52.3159 2.73218C52.8977 2.73232 53.3696 3.20395 53.3696 3.78584Z"
          fill="currentColor"
        />
        <path
          d="M40.8547 8.09663L44.3557 11.5977C44.7672 12.0093 44.7672 12.6764 44.3557 13.0878C43.9441 13.4993 43.2771 13.4994 42.8657 13.0878L39.3646 9.58672C38.953 9.17533 38.9531 8.50816 39.3646 8.09663C39.7759 7.68524 40.4431 7.68524 40.8547 8.09663Z"
          fill="currentColor"
        />
        <path
          d="M62.9174 33.8996H41.7144C41.1325 33.8996 40.6607 33.4278 40.6607 32.8459C40.6607 32.264 41.1326 31.7922 41.7144 31.7922H62.9174C63.4993 31.7922 63.971 32.264 63.971 32.8459C63.971 33.4278 63.4993 33.8996 62.9174 33.8996Z"
          fill="currentColor"
        />
        <path
          d="M62.9174 32.8455H41.7144C41.3247 32.8455 40.9852 32.6333 40.8029 32.3186C40.3967 33.0196 40.9041 33.8991 41.7144 33.8991H62.9174C63.7261 33.8991 64.2358 33.0211 63.8289 32.3186C63.6466 32.6333 63.3071 32.8455 62.9174 32.8455Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_258_1820">
          <rect
            width="36.6316"
            height="36.6316"
            fill="currentColor"
            color="currentColor"
            transform="translate(34)"
          />
        </clipPath>
      </defs>
    </Icon>
  );
};

export default Logo;
