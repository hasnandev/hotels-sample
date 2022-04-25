import React from "react";
import { palette } from "src/components/foundation/palette";

const WeddingReceptionIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({
  fill,
  stroke,
}) => {
  return (
    <svg
      width="32"
      height="24"
      viewBox="0 0 32 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask id="path-1-inside-1" fill="white">
        <path d="M21.7761 13.5998C21.4029 12.0792 20.5159 10.7342 19.2651 9.7925C18.0143 8.85075 16.4765 8.37006 14.9121 8.43177C14.214 6.93314 12.9899 5.74312 11.4721 5.08777C11.4364 5.07184 11.3979 5.06313 11.3588 5.06215C11.3197 5.06118 11.2808 5.06795 11.2444 5.08209C11.208 5.09622 11.1747 5.11742 11.1465 5.14449C11.1183 5.17155 11.0957 5.20394 11.0801 5.23978C11.05 5.31211 11.0491 5.39326 11.0774 5.46629C11.1057 5.53932 11.1611 5.5986 11.2321 5.63177C12.11 6.00954 12.888 6.58642 13.5045 7.31677C14.1209 8.04711 14.559 8.91089 14.7841 9.83978C14.7841 9.92778 14.8241 10.0238 14.8481 10.1198C15.1325 11.5891 14.8752 13.1118 14.1236 14.406C13.3721 15.7003 12.1772 16.6785 10.7601 17.1598L10.6881 16.9918C10.641 16.8824 10.6009 16.7702 10.5681 16.6558L10.5201 16.4958C11.7798 16.0701 12.84 15.1978 13.5003 14.0436C14.1607 12.8895 14.3755 11.5335 14.1041 10.2318C14.1041 10.1678 14.1041 10.1118 14.1041 10.0558C14.0008 9.65513 13.856 9.26635 13.6721 8.89577C13.1236 7.81104 12.2281 6.9409 11.1281 6.42377C10.6037 6.18201 10.0451 6.02279 9.47207 5.95178L11.5761 3.99977C11.6288 3.95218 11.6627 3.88721 11.6715 3.81671C11.6803 3.74621 11.6635 3.67489 11.6241 3.61578L10.6481 2.15977C10.6205 2.11969 10.5834 2.08704 10.5401 2.06472C10.4968 2.04239 10.4488 2.03107 10.4001 2.03177H7.18407C7.13552 2.03175 7.08767 2.04336 7.04452 2.06563C7.00138 2.0879 6.96419 2.12018 6.93608 2.15977L5.96007 3.61578C5.92066 3.67489 5.90381 3.74621 5.91263 3.81671C5.92144 3.88721 5.95532 3.95218 6.00807 3.99977L8.11208 5.95178C7.89602 5.97553 7.68207 6.01564 7.47207 6.07177C6.19666 6.38461 5.07746 7.14826 4.32105 8.22176C3.56464 9.29526 3.22209 10.6061 3.35662 11.9125C3.49115 13.2188 4.09369 14.4323 5.05301 15.3291C6.01233 16.2259 7.26367 16.7454 8.57608 16.7918V16.8558C8.57608 16.9118 8.57607 16.9678 8.61607 17.0238C8.61607 17.0718 8.61607 17.1118 8.61607 17.1518V17.1918L8.66408 17.3198L8.71208 17.4798C7.28767 17.4872 5.90434 17.0027 4.79588 16.1081C3.68741 15.2136 2.92177 13.9637 2.62832 12.5698C2.33488 11.1759 2.53161 9.72351 3.18531 8.45793C3.839 7.19235 4.90955 6.19124 6.21607 5.62377C6.25261 5.60891 6.28581 5.58689 6.31371 5.55902C6.34162 5.53114 6.36368 5.49798 6.37858 5.46146C6.39349 5.42494 6.40095 5.3858 6.40052 5.34636C6.40009 5.30691 6.39178 5.26795 6.37608 5.23177C6.36046 5.19594 6.33789 5.16356 6.30968 5.13649C6.28148 5.10943 6.24819 5.08822 6.21175 5.07409C6.1753 5.05996 6.13642 5.05318 6.09734 5.05416C6.05827 5.05513 6.01977 5.06384 5.98407 5.07978C4.53078 5.69366 3.33724 6.79541 2.60926 8.19504C1.88128 9.59467 1.66449 11.2044 1.99628 12.7468C2.32807 14.2891 3.18764 15.6674 4.42676 16.6438C5.66589 17.6203 7.2069 18.1338 8.78407 18.0958H9.05607C9.60456 19.2588 10.4712 20.2427 11.5557 20.9336C12.6402 21.6245 13.8982 21.9942 15.1841 21.9998C15.7231 21.9986 16.2601 21.9342 16.7841 21.8078C17.6509 21.5967 18.4676 21.217 19.1876 20.6903C19.9076 20.1635 20.5168 19.5001 20.9804 18.7379C21.444 17.9757 21.7528 17.1296 21.8893 16.248C22.0259 15.3664 21.9874 14.4665 21.7761 13.5998ZM14.5761 14.8238C15.3884 13.4894 15.7135 11.9148 15.4961 10.3678C16.4668 10.4322 17.3967 10.783 18.1681 11.3758C19.0386 12.0421 19.6518 12.9889 19.9041 14.0558C20.208 15.3044 20.0037 16.6226 19.3362 17.7206C18.6686 18.8187 17.5924 19.6068 16.3441 19.9118C15.3392 20.1565 14.2825 20.0734 13.3282 19.6747C12.374 19.276 11.5722 18.5826 11.0401 17.6958C12.5098 17.1783 13.7559 16.1695 14.5681 14.8398L14.5761 14.8238ZM10.3841 15.8878C10.2327 14.7805 10.4685 13.6549 11.0516 12.7015C11.6347 11.748 12.5294 11.0254 13.5841 10.6558C13.7355 11.7631 13.4997 12.8887 12.9165 13.8421C12.3334 14.7955 11.4388 15.5182 10.3841 15.8878ZM7.35208 2.59178H10.1841L10.7601 3.44777H6.76008L7.35208 2.59178ZM6.96807 4.03978H10.5681L8.78407 5.71177L6.96807 4.03978ZM8.47207 16.1598C7.5149 16.1038 6.59477 15.7702 5.82408 15.1998C5.10005 14.6426 4.5482 13.8922 4.23212 13.035C3.91604 12.1778 3.8486 11.2488 4.03757 10.355C4.22653 9.46113 4.66423 8.63889 5.30019 7.98299C5.93615 7.32709 6.74449 6.86423 7.63207 6.64777C8.70351 6.37929 9.83501 6.49245 10.8321 6.96778C11.7057 7.37748 12.438 8.03737 12.9361 8.86378C11.4621 9.38388 10.2133 10.3976 9.40118 11.7331C8.58908 13.0686 8.26367 14.6438 8.48007 16.1918L8.47207 16.1598ZM16.6481 21.2318C15.2215 21.5794 13.7178 21.4081 12.406 20.7486C11.0942 20.089 10.0599 18.9842 9.48808 17.6318V17.5598V17.4638C9.48808 17.4638 9.48808 17.3918 9.44808 17.3518C9.44466 17.3118 9.44466 17.2717 9.44808 17.2318C9.43117 17.1931 9.41778 17.1529 9.40807 17.1118V16.9918V16.9038C9.40807 16.8558 9.40807 16.8158 9.40807 16.7758C9.40807 16.7358 9.40807 16.6878 9.40807 16.6478V16.5918V16.5358V16.4958C9.12224 15.0273 9.37911 13.5051 10.131 12.2118C10.8828 10.9184 12.0786 9.94198 13.4961 9.46378C13.5989 9.6881 13.6819 9.92099 13.7441 10.1598C12.4843 10.5885 11.4242 11.4622 10.7629 12.617C10.1015 13.7718 9.88434 15.1282 10.1521 16.4318C10.1521 16.4318 10.1521 16.4798 10.1521 16.5038V16.6078C10.1521 16.6558 10.1521 16.7038 10.1521 16.7518C10.1556 16.789 10.1556 16.8265 10.1521 16.8638C10.1521 16.8638 10.1521 16.9438 10.1521 16.9758L10.2001 17.1118C10.5851 18.154 11.2796 19.0536 12.1905 19.6899C13.1013 20.3262 14.185 20.6688 15.2961 20.6718C15.7329 20.6698 16.1679 20.6161 16.5921 20.5118C17.2864 20.3439 17.9407 20.0406 18.5177 19.6195C19.0946 19.1983 19.5828 18.6675 19.9544 18.0574C20.3259 17.4474 20.5735 16.77 20.6829 16.0641C20.7923 15.3582 20.7615 14.6377 20.5921 13.9438C20.3081 12.7479 19.6218 11.6859 18.6481 10.9358C17.7433 10.2335 16.6407 9.83333 15.4961 9.79178V9.72778C15.4416 9.49771 15.3748 9.27071 15.2961 9.04777C16.8112 9.04006 18.2763 9.58881 19.4136 10.5899C20.5508 11.591 21.281 12.9747 21.4655 14.4785C21.65 15.9823 21.2761 17.5016 20.4146 18.7479C19.5531 19.9943 18.2641 20.881 16.7921 21.2398L16.6481 21.2318Z" />
      </mask>
      <path
        d="M21.7761 13.5998C21.4029 12.0792 20.5159 10.7342 19.2651 9.7925C18.0143 8.85075 16.4765 8.37006 14.9121 8.43177C14.214 6.93314 12.9899 5.74312 11.4721 5.08777C11.4364 5.07184 11.3979 5.06313 11.3588 5.06215C11.3197 5.06118 11.2808 5.06795 11.2444 5.08209C11.208 5.09622 11.1747 5.11742 11.1465 5.14449C11.1183 5.17155 11.0957 5.20394 11.0801 5.23978C11.05 5.31211 11.0491 5.39326 11.0774 5.46629C11.1057 5.53932 11.1611 5.5986 11.2321 5.63177C12.11 6.00954 12.888 6.58642 13.5045 7.31677C14.1209 8.04711 14.559 8.91089 14.7841 9.83978C14.7841 9.92778 14.8241 10.0238 14.8481 10.1198C15.1325 11.5891 14.8752 13.1118 14.1236 14.406C13.3721 15.7003 12.1772 16.6785 10.7601 17.1598L10.6881 16.9918C10.641 16.8824 10.6009 16.7702 10.5681 16.6558L10.5201 16.4958C11.7798 16.0701 12.84 15.1978 13.5003 14.0436C14.1607 12.8895 14.3755 11.5335 14.1041 10.2318C14.1041 10.1678 14.1041 10.1118 14.1041 10.0558C14.0008 9.65513 13.856 9.26635 13.6721 8.89577C13.1236 7.81104 12.2281 6.9409 11.1281 6.42377C10.6037 6.18201 10.0451 6.02279 9.47207 5.95178L11.5761 3.99977C11.6288 3.95218 11.6627 3.88721 11.6715 3.81671C11.6803 3.74621 11.6635 3.67489 11.6241 3.61578L10.6481 2.15977C10.6205 2.11969 10.5834 2.08704 10.5401 2.06472C10.4968 2.04239 10.4488 2.03107 10.4001 2.03177H7.18407C7.13552 2.03175 7.08767 2.04336 7.04452 2.06563C7.00138 2.0879 6.96419 2.12018 6.93608 2.15977L5.96007 3.61578C5.92066 3.67489 5.90381 3.74621 5.91263 3.81671C5.92144 3.88721 5.95532 3.95218 6.00807 3.99977L8.11208 5.95178C7.89602 5.97553 7.68207 6.01564 7.47207 6.07177C6.19666 6.38461 5.07746 7.14826 4.32105 8.22176C3.56464 9.29526 3.22209 10.6061 3.35662 11.9125C3.49115 13.2188 4.09369 14.4323 5.05301 15.3291C6.01233 16.2259 7.26367 16.7454 8.57608 16.7918V16.8558C8.57608 16.9118 8.57607 16.9678 8.61607 17.0238C8.61607 17.0718 8.61607 17.1118 8.61607 17.1518V17.1918L8.66408 17.3198L8.71208 17.4798C7.28767 17.4872 5.90434 17.0027 4.79588 16.1081C3.68741 15.2136 2.92177 13.9637 2.62832 12.5698C2.33488 11.1759 2.53161 9.72351 3.18531 8.45793C3.839 7.19235 4.90955 6.19124 6.21607 5.62377C6.25261 5.60891 6.28581 5.58689 6.31371 5.55902C6.34162 5.53114 6.36368 5.49798 6.37858 5.46146C6.39349 5.42494 6.40095 5.3858 6.40052 5.34636C6.40009 5.30691 6.39178 5.26795 6.37608 5.23177C6.36046 5.19594 6.33789 5.16356 6.30968 5.13649C6.28148 5.10943 6.24819 5.08822 6.21175 5.07409C6.1753 5.05996 6.13642 5.05318 6.09734 5.05416C6.05827 5.05513 6.01977 5.06384 5.98407 5.07978C4.53078 5.69366 3.33724 6.79541 2.60926 8.19504C1.88128 9.59467 1.66449 11.2044 1.99628 12.7468C2.32807 14.2891 3.18764 15.6674 4.42676 16.6438C5.66589 17.6203 7.2069 18.1338 8.78407 18.0958H9.05607C9.60456 19.2588 10.4712 20.2427 11.5557 20.9336C12.6402 21.6245 13.8982 21.9942 15.1841 21.9998C15.7231 21.9986 16.2601 21.9342 16.7841 21.8078C17.6509 21.5967 18.4676 21.217 19.1876 20.6903C19.9076 20.1635 20.5168 19.5001 20.9804 18.7379C21.444 17.9757 21.7528 17.1296 21.8893 16.248C22.0259 15.3664 21.9874 14.4665 21.7761 13.5998ZM14.5761 14.8238C15.3884 13.4894 15.7135 11.9148 15.4961 10.3678C16.4668 10.4322 17.3967 10.783 18.1681 11.3758C19.0386 12.0421 19.6518 12.9889 19.9041 14.0558C20.208 15.3044 20.0037 16.6226 19.3362 17.7206C18.6686 18.8187 17.5924 19.6068 16.3441 19.9118C15.3392 20.1565 14.2825 20.0734 13.3282 19.6747C12.374 19.276 11.5722 18.5826 11.0401 17.6958C12.5098 17.1783 13.7559 16.1695 14.5681 14.8398L14.5761 14.8238ZM10.3841 15.8878C10.2327 14.7805 10.4685 13.6549 11.0516 12.7015C11.6347 11.748 12.5294 11.0254 13.5841 10.6558C13.7355 11.7631 13.4997 12.8887 12.9165 13.8421C12.3334 14.7955 11.4388 15.5182 10.3841 15.8878ZM7.35208 2.59178H10.1841L10.7601 3.44777H6.76008L7.35208 2.59178ZM6.96807 4.03978H10.5681L8.78407 5.71177L6.96807 4.03978ZM8.47207 16.1598C7.5149 16.1038 6.59477 15.7702 5.82408 15.1998C5.10005 14.6426 4.5482 13.8922 4.23212 13.035C3.91604 12.1778 3.8486 11.2488 4.03757 10.355C4.22653 9.46113 4.66423 8.63889 5.30019 7.98299C5.93615 7.32709 6.74449 6.86423 7.63207 6.64777C8.70351 6.37929 9.83501 6.49245 10.8321 6.96778C11.7057 7.37748 12.438 8.03737 12.9361 8.86378C11.4621 9.38388 10.2133 10.3976 9.40118 11.7331C8.58908 13.0686 8.26367 14.6438 8.48007 16.1918L8.47207 16.1598ZM16.6481 21.2318C15.2215 21.5794 13.7178 21.4081 12.406 20.7486C11.0942 20.089 10.0599 18.9842 9.48808 17.6318V17.5598V17.4638C9.48808 17.4638 9.48808 17.3918 9.44808 17.3518C9.44466 17.3118 9.44466 17.2717 9.44808 17.2318C9.43117 17.1931 9.41778 17.1529 9.40807 17.1118V16.9918V16.9038C9.40807 16.8558 9.40807 16.8158 9.40807 16.7758C9.40807 16.7358 9.40807 16.6878 9.40807 16.6478V16.5918V16.5358V16.4958C9.12224 15.0273 9.37911 13.5051 10.131 12.2118C10.8828 10.9184 12.0786 9.94198 13.4961 9.46378C13.5989 9.6881 13.6819 9.92099 13.7441 10.1598C12.4843 10.5885 11.4242 11.4622 10.7629 12.617C10.1015 13.7718 9.88434 15.1282 10.1521 16.4318C10.1521 16.4318 10.1521 16.4798 10.1521 16.5038V16.6078C10.1521 16.6558 10.1521 16.7038 10.1521 16.7518C10.1556 16.789 10.1556 16.8265 10.1521 16.8638C10.1521 16.8638 10.1521 16.9438 10.1521 16.9758L10.2001 17.1118C10.5851 18.154 11.2796 19.0536 12.1905 19.6899C13.1013 20.3262 14.185 20.6688 15.2961 20.6718C15.7329 20.6698 16.1679 20.6161 16.5921 20.5118C17.2864 20.3439 17.9407 20.0406 18.5177 19.6195C19.0946 19.1983 19.5828 18.6675 19.9544 18.0574C20.3259 17.4474 20.5735 16.77 20.6829 16.0641C20.7923 15.3582 20.7615 14.6377 20.5921 13.9438C20.3081 12.7479 19.6218 11.6859 18.6481 10.9358C17.7433 10.2335 16.6407 9.83333 15.4961 9.79178V9.72778C15.4416 9.49771 15.3748 9.27071 15.2961 9.04777C16.8112 9.04006 18.2763 9.58881 19.4136 10.5899C20.5508 11.591 21.281 12.9747 21.4655 14.4785C21.65 15.9823 21.2761 17.5016 20.4146 18.7479C19.5531 19.9943 18.2641 20.881 16.7921 21.2398L16.6481 21.2318Z"
        fill={fill}
        stroke={stroke}
        strokeWidth="2"
        mask="url(#path-1-inside-1)"
      />
    </svg>
  );
};

WeddingReceptionIcon.defaultProps = {
  fill: palette.grey?.[500],
  stroke: palette.grey?.[500],
};

export default WeddingReceptionIcon;
