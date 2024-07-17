import React from 'react'

type Props = {
    color?: string,
    fill?: string,
    stroke?: string,
    size?: number,
}

const LogoSVG = ({ color = "#000", fill, stroke, size = 200 }: Props) => {
    return (
        <svg width={size} height={size} viewBox="0 0 201 201" fill={fill ?? color} stroke={stroke ?? color} xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M101.331 1L1.10016 34.2469L22.7069 41.677V52.9119L16.1048 60.4945L14.3042 77.9929C20.9063 82.6591 30.5093 80.1316 32.3098 77.9929C31.7096 72.549 30.5093 61.4278 30.5093 60.4945C30.5093 59.5613 26.1079 55.0506 23.9072 52.9119V42.0898L40.1122 47.6624C50.1153 43.9683 73.0024 35.7635 84.526 32.4971C97.5425 28.8076 105.168 30.3572 113.16 31.9813L113.16 31.9813L113.16 31.9813L113.16 31.9814C114.012 32.1545 114.868 32.3285 115.736 32.4971C122.938 33.897 149.146 43.1906 161.35 47.6624L200.362 34.2469L101.331 1ZM46.1141 51.162C55.3169 47.6624 75.8833 40.1964 84.526 38.3299C95.3293 35.9968 102.532 35.9968 115.135 38.3299C125.219 40.1964 146.145 47.6624 155.348 51.162V112.99C156.348 126.6 146.825 155.802 100.731 163.735C54.6367 156.269 45.1138 126.794 46.1141 112.99V51.162ZM66.1912 108.207C67.4012 109.82 69.0329 111.03 71.0862 111.837C73.1762 112.607 75.8529 112.992 79.1162 112.992C79.9595 112.992 80.9678 112.937 82.1412 112.827C83.3145 112.754 84.5245 112.644 85.7712 112.497C87.0179 112.35 88.2279 112.185 89.4012 112.002C90.5745 111.819 91.6012 111.672 92.4812 111.562V91.8721H80.3812V98.3621H84.2312V105.402C83.8279 105.439 83.3512 105.494 82.8012 105.567C82.2512 105.604 81.6829 105.64 81.0962 105.677C80.5462 105.714 80.0329 105.732 79.5562 105.732C77.4295 105.732 75.7979 105.31 74.6612 104.467C73.5612 103.587 72.8095 102.267 72.4062 100.507C72.0029 98.7471 71.8012 96.5104 71.8012 93.7971C71.8012 91.6704 71.8929 89.8554 72.0762 88.3521C72.2962 86.8488 72.6812 85.6204 73.2312 84.6671C73.7812 83.7138 74.5879 83.0171 75.6512 82.5771C76.7145 82.1004 78.1262 81.8621 79.8862 81.8621C81.0962 81.8621 82.4529 81.9171 83.9562 82.0271C85.4595 82.1371 86.9445 82.2654 88.4112 82.4121C89.9145 82.5221 91.1979 82.6504 92.2612 82.7971L92.3162 76.0871C91.2895 75.8304 90.0245 75.5738 88.5212 75.3171C87.0179 75.0604 85.4229 74.8588 83.7362 74.7121C82.0862 74.5288 80.5278 74.4371 79.0612 74.4371C76.0912 74.4371 73.5795 74.8221 71.5262 75.5921C69.4728 76.3254 67.8045 77.4804 66.5212 79.0571C65.2745 80.5971 64.3762 82.5954 63.8262 85.0521C63.2762 87.4721 63.0012 90.3871 63.0012 93.7971C63.0012 96.9871 63.2395 99.7921 63.7162 102.212C64.1928 104.595 65.0178 106.594 66.1912 108.207ZM98.1002 75.0971V112.497H106.79V86.5371H107.505L114.38 111.617H122.245L129.175 86.5371H129.89V112.497H138.58V75.0971H124.665L118.34 97.8671L111.74 75.0971H98.1002Z" />
            <path d="M1.10016 34.2469L0.942741 33.7724C0.739168 33.8399 0.601338 34.0297 0.600166 34.2442C0.598994 34.4587 0.734742 34.65 0.937564 34.7198L1.10016 34.2469ZM101.331 1L101.49 0.525999C101.388 0.491531 101.277 0.49133 101.174 0.525427L101.331 1ZM22.7069 41.677H23.2069C23.2069 41.4635 23.0713 41.2736 22.8694 41.2042L22.7069 41.677ZM22.7069 52.9119L23.0839 53.2402C23.1632 53.1492 23.2069 53.0326 23.2069 52.9119H22.7069ZM16.1048 60.4945L15.7277 60.1662C15.66 60.2439 15.618 60.3408 15.6074 60.4433L16.1048 60.4945ZM14.3042 77.9929L13.8069 77.9417C13.7884 78.1213 13.8682 78.297 14.0157 78.4012L14.3042 77.9929ZM32.3098 77.9929L32.6923 78.3149C32.7804 78.2103 32.8218 78.0741 32.8068 77.9381L32.3098 77.9929ZM23.9072 52.9119H23.4072C23.4072 53.047 23.4619 53.1763 23.5588 53.2704L23.9072 52.9119ZM23.9072 42.0898L24.0698 41.617C23.917 41.5644 23.7483 41.589 23.6168 41.6828C23.4853 41.7766 23.4072 41.9282 23.4072 42.0898H23.9072ZM40.1122 47.6624L39.9496 48.1352C40.0587 48.1727 40.1773 48.1713 40.2855 48.1314L40.1122 47.6624ZM84.526 32.4971L84.3896 32.016L84.3896 32.016L84.526 32.4971ZM113.16 31.9813L113.06 32.4713L113.062 32.4716L113.16 31.9813ZM113.16 31.9814L113.26 31.4914L113.258 31.4911L113.16 31.9814ZM115.736 32.4971L115.831 32.0063L115.831 32.0063L115.736 32.4971ZM161.35 47.6624L161.178 48.1318C161.286 48.1714 161.404 48.1725 161.512 48.1352L161.35 47.6624ZM200.362 34.2469L200.524 34.7198C200.727 34.6501 200.863 34.4592 200.862 34.2451C200.861 34.031 200.724 33.8411 200.521 33.7729L200.362 34.2469ZM84.526 38.3299L84.6315 38.8186L84.6315 38.8186L84.526 38.3299ZM46.1141 51.162L45.9364 50.6947C45.7424 50.7685 45.6141 50.9545 45.6141 51.162H46.1141ZM115.135 38.3299L115.044 38.8215L115.044 38.8215L115.135 38.3299ZM155.348 51.162H155.848C155.848 50.9545 155.72 50.7685 155.526 50.6947L155.348 51.162ZM155.348 112.99H154.848C154.848 113.002 154.848 113.014 154.849 113.026L155.348 112.99ZM100.731 163.735L100.651 164.229C100.706 164.237 100.761 164.237 100.816 164.228L100.731 163.735ZM46.1141 112.99L46.6128 113.026C46.6137 113.014 46.6141 113.002 46.6141 112.99H46.1141ZM71.0862 111.837L70.9033 112.303L70.9133 112.306L71.0862 111.837ZM66.1912 108.207L65.7868 108.501L65.7912 108.507L66.1912 108.207ZM82.1412 112.827L82.11 112.328C82.1048 112.328 82.0997 112.329 82.0945 112.329L82.1412 112.827ZM85.7712 112.497L85.8296 112.994L85.8296 112.994L85.7712 112.497ZM92.4812 111.562L92.5432 112.058C92.7934 112.027 92.9812 111.814 92.9812 111.562H92.4812ZM92.4812 91.8721H92.9812C92.9812 91.596 92.7573 91.3721 92.4812 91.3721V91.8721ZM80.3812 91.8721V91.3721C80.105 91.3721 79.8812 91.596 79.8812 91.8721H80.3812ZM80.3812 98.3621H79.8812C79.8812 98.6382 80.105 98.8621 80.3812 98.8621V98.3621ZM84.2312 98.3621H84.7312C84.7312 98.0859 84.5073 97.8621 84.2312 97.8621V98.3621ZM84.2312 105.402L84.2765 105.9C84.534 105.877 84.7312 105.661 84.7312 105.402H84.2312ZM82.8012 105.567L82.8344 106.066C82.8454 106.065 82.8564 106.064 82.8673 106.063L82.8012 105.567ZM81.0962 105.677L81.065 105.178L81.0629 105.178L81.0962 105.677ZM74.6612 104.467L74.3488 104.858C74.3536 104.861 74.3584 104.865 74.3633 104.869L74.6612 104.467ZM72.4062 100.507L71.9188 100.619L71.9188 100.619L72.4062 100.507ZM72.0762 88.3521L71.5813 88.2797L71.5799 88.2916L72.0762 88.3521ZM73.2312 84.6671L73.6643 84.917L73.6643 84.917L73.2312 84.6671ZM75.6512 82.5771L75.8424 83.0391C75.8468 83.0373 75.8513 83.0353 75.8557 83.0333L75.6512 82.5771ZM88.4112 82.4121L88.3614 82.9098L88.3747 82.9108L88.4112 82.4121ZM92.2612 82.7971L92.1929 83.2924C92.3353 83.312 92.4794 83.2694 92.5882 83.1754C92.6969 83.0813 92.76 82.945 92.7612 82.8012L92.2612 82.7971ZM92.3162 76.0871L92.8162 76.0912C92.8181 75.8602 92.6615 75.658 92.4375 75.602L92.3162 76.0871ZM88.5212 75.3171L88.437 75.81L88.437 75.81L88.5212 75.3171ZM83.7362 74.7121L83.681 75.2092L83.6929 75.2102L83.7362 74.7121ZM71.5262 75.5921L71.6944 76.063L71.7017 76.0603L71.5262 75.5921ZM66.5212 79.0571L66.1334 78.7415L66.1326 78.7425L66.5212 79.0571ZM63.8262 85.0521L64.3138 85.1629L64.3141 85.1613L63.8262 85.0521ZM63.7162 102.212L63.2256 102.309L63.2259 102.31L63.7162 102.212ZM98.1002 112.497H97.6002C97.6002 112.773 97.8241 112.997 98.1002 112.997V112.497ZM98.1002 75.0971V74.5971C97.8241 74.5971 97.6002 74.8209 97.6002 75.0971H98.1002ZM106.79 112.497V112.997C107.066 112.997 107.29 112.773 107.29 112.497H106.79ZM106.79 86.5371V86.0371C106.514 86.0371 106.29 86.261 106.29 86.5371H106.79ZM107.505 86.5371L107.987 86.4049C107.928 86.1877 107.73 86.0371 107.505 86.0371V86.5371ZM114.38 111.617L113.898 111.749C113.958 111.967 114.155 112.117 114.38 112.117V111.617ZM122.245 111.617V112.117C122.47 112.117 122.667 111.967 122.727 111.75L122.245 111.617ZM129.175 86.5371V86.0371C128.95 86.0371 128.753 86.1872 128.693 86.4039L129.175 86.5371ZM129.89 86.5371H130.39C130.39 86.261 130.166 86.0371 129.89 86.0371V86.5371ZM129.89 112.497H129.39C129.39 112.773 129.614 112.997 129.89 112.997V112.497ZM138.58 112.497V112.997C138.856 112.997 139.08 112.773 139.08 112.497H138.58ZM138.58 75.0971H139.08C139.08 74.8209 138.856 74.5971 138.58 74.5971V75.0971ZM124.665 75.0971V74.5971C124.441 74.5971 124.244 74.7469 124.183 74.9633L124.665 75.0971ZM118.34 97.8671L117.86 98.0063C117.922 98.221 118.119 98.3683 118.343 98.3671C118.567 98.3658 118.762 98.2163 118.822 98.0009L118.34 97.8671ZM111.74 75.0971L112.22 74.9579C112.158 74.7442 111.963 74.5971 111.74 74.5971V75.0971ZM1.25758 34.7215L101.489 1.47457L101.174 0.525427L0.942741 33.7724L1.25758 34.7215ZM22.8694 41.2042L1.26275 33.7741L0.937564 34.7198L22.5443 42.1498L22.8694 41.2042ZM23.2069 52.9119V41.677H22.2069V52.9119H23.2069ZM16.4819 60.8228L23.0839 53.2402L22.3298 52.5835L15.7277 60.1662L16.4819 60.8228ZM14.8016 78.0441L16.6022 60.5457L15.6074 60.4433L13.8069 77.9417L14.8016 78.0441ZM31.9273 77.6709C31.5627 78.1039 30.7257 78.626 29.4918 79.0824C28.2788 79.5311 26.7465 79.8926 25.062 80.0468C21.6859 80.3559 17.7661 79.8274 14.5928 77.5846L14.0157 78.4012C17.4444 80.8246 21.6271 81.3655 25.1532 81.0427C26.9197 80.8809 28.5385 80.5012 29.8387 80.0203C31.1181 79.5471 32.1566 78.9512 32.6923 78.3149L31.9273 77.6709ZM30.0093 60.4945C30.0093 60.7589 30.0882 61.6625 30.2085 62.905C30.3306 64.1659 30.4996 65.8152 30.6872 67.6043C31.0624 71.183 31.5127 75.3252 31.8128 78.0477L32.8068 77.9381C32.5068 75.2167 32.0567 71.0763 31.6817 67.5C31.4942 65.7118 31.3256 64.0655 31.2039 62.8086C31.0804 61.5333 31.0093 60.6967 31.0093 60.4945H30.0093ZM23.5588 53.2704C24.6546 54.3354 26.2974 55.9901 27.6637 57.4917C28.3478 58.2436 28.9554 58.9492 29.3892 59.5195C29.6069 59.8055 29.773 60.0474 29.8824 60.2377C29.9371 60.3328 29.9724 60.4062 29.9929 60.4593C30.0158 60.5184 30.0093 60.5246 30.0093 60.4945H31.0093C31.0093 60.3478 30.9684 60.2093 30.9257 60.0988C30.8807 59.9823 30.8193 59.861 30.7493 59.7393C30.6094 59.4959 30.4145 59.2155 30.1851 58.914C29.725 58.3092 29.0946 57.5785 28.4033 56.8187C27.0188 55.2971 25.3606 53.6271 24.2557 52.5533L23.5588 53.2704ZM23.4072 42.0898V52.9119H24.4072V42.0898H23.4072ZM40.2748 47.1895L24.0698 41.617L23.7446 42.5626L39.9496 48.1352L40.2748 47.1895ZM84.3896 32.016C72.8443 35.2886 49.9392 43.5003 39.939 47.1933L40.2855 48.1314C50.2914 44.4362 73.1605 36.2383 84.6623 32.9781L84.3896 32.016ZM113.259 31.4913C105.24 29.8616 97.5207 28.294 84.3896 32.016L84.6623 32.9781C97.5643 29.3211 105.096 30.8528 113.06 32.4713L113.259 31.4913ZM113.258 31.491L113.258 31.491L113.062 32.4716L113.062 32.4716L113.258 31.491ZM113.258 31.491L113.258 31.491L113.062 32.4716L113.062 32.4716L113.258 31.491ZM113.258 31.4911L113.258 31.491L113.062 32.4716L113.062 32.4716L113.258 31.4911ZM115.831 32.0063C114.966 31.8382 114.112 31.6646 113.26 31.4914L113.06 32.4713C113.912 32.6444 114.77 32.8189 115.64 32.9879L115.831 32.0063ZM161.522 47.1929C155.417 44.956 145.811 41.5133 136.828 38.4544C127.863 35.4014 119.473 32.7142 115.831 32.0063L115.64 32.9879C119.2 33.6798 127.516 36.3394 136.506 39.4011C145.479 42.4569 155.078 45.8969 161.178 48.1318L161.522 47.1929ZM200.199 33.7741L161.187 47.1895L161.512 48.1352L200.524 34.7198L200.199 33.7741ZM101.172 1.474L200.203 34.7209L200.521 33.7729L101.49 0.525999L101.172 1.474ZM84.4204 37.8412C75.733 39.7173 55.1278 47.1994 45.9364 50.6947L46.2918 51.6294C55.5061 48.1254 76.0336 40.6754 84.6315 38.8186L84.4204 37.8412ZM115.226 37.8382C102.568 35.495 95.298 35.492 84.4204 37.8412L84.6315 38.8186C95.3607 36.5015 102.495 36.4986 115.044 38.8215L115.226 37.8382ZM155.526 50.6947C146.332 47.1985 125.362 39.7145 115.226 37.8382L115.044 38.8215C125.075 40.6783 145.958 48.1262 155.17 51.6294L155.526 50.6947ZM155.848 112.99V51.162H154.848V112.99H155.848ZM100.816 164.228C123.963 160.244 137.984 150.908 146.09 140.804C154.188 130.711 156.356 119.882 155.847 112.953L154.849 113.026C155.34 119.707 153.247 130.285 145.31 140.178C137.381 150.062 123.593 159.293 100.646 163.242L100.816 164.228ZM45.6154 112.954C45.1064 119.978 47.2734 130.923 55.3716 141.051C63.4784 151.191 77.5016 160.479 100.651 164.229L100.811 163.241C77.8661 159.525 64.0808 150.343 56.1526 140.427C48.2158 130.5 46.1215 119.806 46.6128 113.026L45.6154 112.954ZM45.6141 51.162V112.99H46.6141V51.162H45.6141ZM71.269 111.372C69.2936 110.596 67.7404 109.439 66.5912 107.907L65.7912 108.507C67.062 110.202 68.7721 111.465 70.9034 112.302L71.269 111.372ZM79.1162 112.492C75.8869 112.492 73.2743 112.11 71.259 111.368L70.9133 112.306C73.078 113.104 75.8188 113.492 79.1162 113.492V112.492ZM82.0945 112.329C80.9311 112.438 79.9392 112.492 79.1162 112.492V113.492C79.9798 113.492 81.0046 113.436 82.1879 113.325L82.0945 112.329ZM85.7128 112.001C84.4745 112.146 83.2736 112.255 82.11 112.328L82.1724 113.326C83.3554 113.252 84.5745 113.141 85.8296 112.994L85.7128 112.001ZM89.324 111.508C88.1572 111.69 86.9535 111.855 85.7128 112.001L85.8296 112.994C87.0822 112.846 88.2985 112.68 89.4784 112.496L89.324 111.508ZM92.4192 111.066C91.5327 111.177 90.5008 111.324 89.324 111.508L89.4784 112.496C90.6482 112.313 91.6696 112.167 92.5432 112.058L92.4192 111.066ZM91.9812 91.8721V111.562H92.9812V91.8721H91.9812ZM80.3812 92.3721H92.4812V91.3721H80.3812V92.3721ZM80.8812 98.3621V91.8721H79.8812V98.3621H80.8812ZM84.2312 97.8621H80.3812V98.8621H84.2312V97.8621ZM84.7312 105.402V98.3621H83.7312V105.402H84.7312ZM82.8673 106.063C83.4127 105.99 83.8821 105.936 84.2765 105.9L84.1859 104.904C83.7736 104.942 83.2897 104.998 82.7351 105.071L82.8673 106.063ZM81.1274 106.176C81.7147 106.139 82.2837 106.103 82.8344 106.066L82.7679 105.068C82.2187 105.105 81.651 105.141 81.065 105.178L81.1274 106.176ZM79.5562 106.232C80.0455 106.232 80.57 106.213 81.1294 106.176L81.0629 105.178C80.5223 105.214 80.0202 105.232 79.5562 105.232V106.232ZM74.3633 104.869C75.6197 105.801 77.3734 106.232 79.5562 106.232V105.232C77.4857 105.232 75.976 104.82 74.9591 104.066L74.3633 104.869ZM71.9188 100.619C72.3402 102.457 73.1385 103.889 74.3488 104.858L74.9735 104.077C73.9839 103.285 73.2789 102.077 72.8935 100.395L71.9188 100.619ZM71.3012 93.7971C71.3012 96.5312 71.504 98.8088 71.9188 100.619L72.8935 100.395C72.5017 98.6854 72.3012 96.4896 72.3012 93.7971H71.3012ZM71.5799 88.2916C71.3933 89.8212 71.3012 91.6576 71.3012 93.7971H72.3012C72.3012 91.6833 72.3924 89.8897 72.5725 88.4126L71.5799 88.2916ZM72.7981 84.4172C72.207 85.4418 71.8074 86.736 71.5814 88.2797L72.5709 88.4245C72.785 86.9615 73.1554 85.799 73.6643 84.917L72.7981 84.4172ZM75.46 82.1151C74.2998 82.5951 73.4058 83.3639 72.7981 84.4172L73.6643 84.917C74.1566 84.0636 74.8759 83.439 75.8424 83.0391L75.46 82.1151ZM79.8862 81.3621C78.0883 81.3621 76.5986 81.6044 75.4467 82.1208L75.8557 83.0333C76.8304 82.5964 78.1641 82.3621 79.8862 82.3621V81.3621ZM83.9927 81.5284C82.48 81.4177 81.1109 81.3621 79.8862 81.3621V82.3621C81.0815 82.3621 82.4257 82.4164 83.9197 82.5258L83.9927 81.5284ZM88.4609 81.9146C86.9898 81.7675 85.5003 81.6387 83.9927 81.5284L83.9197 82.5258C85.4187 82.6354 86.8993 82.7634 88.3614 82.9096L88.4609 81.9146ZM92.3295 82.3018C91.2523 82.1532 89.9578 82.0239 88.4477 81.9134L88.3747 82.9108C89.8713 83.0203 91.1434 83.1476 92.1929 83.2924L92.3295 82.3018ZM91.8162 76.083L91.7612 82.793L92.7612 82.8012L92.8162 76.0912L91.8162 76.083ZM88.437 75.81C89.9328 76.0653 91.1846 76.3196 92.1949 76.5722L92.4375 75.602C91.3945 75.3413 90.1162 75.0822 88.6053 74.8242L88.437 75.81ZM83.6929 75.2102C85.3673 75.3558 86.9486 75.5558 88.437 75.81L88.6053 74.8242C87.0871 74.565 85.4784 74.3617 83.7795 74.214L83.6929 75.2102ZM79.0612 74.9371C80.5072 74.9371 82.047 75.0275 83.681 75.209L83.7914 74.2151C82.1254 74.03 80.5485 73.9371 79.0612 73.9371V74.9371ZM71.7017 76.0603C73.6829 75.3173 76.1313 74.9371 79.0612 74.9371V73.9371C76.0511 73.9371 73.4761 74.3269 71.3506 75.1239L71.7017 76.0603ZM66.909 79.3727C68.1305 77.872 69.7205 76.7679 71.6944 76.063L71.358 75.1212C69.2252 75.883 67.4786 77.0888 66.1334 78.7415L66.909 79.3727ZM64.3141 85.1613C64.8517 82.7601 65.7229 80.8378 66.9098 79.3717L66.1326 78.7425C64.8261 80.3563 63.9007 82.4308 63.3383 84.9429L64.3141 85.1613ZM63.5012 93.7971C63.5012 90.4116 63.7744 87.5359 64.3137 85.1629L63.3386 84.9413C62.7779 87.4083 62.5012 90.3626 62.5012 93.7971H63.5012ZM64.2068 102.115C63.7379 99.735 63.5012 96.9635 63.5012 93.7971H62.5012C62.5012 97.0106 62.7412 99.8492 63.2256 102.309L64.2068 102.115ZM66.5956 107.913C65.4729 106.369 64.672 104.442 64.2065 102.114L63.2259 102.31C63.7137 104.749 64.5628 106.818 65.7868 108.501L66.5956 107.913ZM98.6002 112.497V75.0971H97.6002V112.497H98.6002ZM106.79 111.997H98.1002V112.997H106.79V111.997ZM106.29 86.5371V112.497H107.29V86.5371H106.29ZM107.505 86.0371H106.79V87.0371H107.505V86.0371ZM114.862 111.485L107.987 86.4049L107.023 86.6693L113.898 111.749L114.862 111.485ZM122.245 111.117H114.38V112.117H122.245V111.117ZM128.693 86.4039L121.763 111.484L122.727 111.75L129.657 86.6703L128.693 86.4039ZM129.89 86.0371H129.175V87.0371H129.89V86.0371ZM130.39 112.497V86.5371H129.39V112.497H130.39ZM138.58 111.997H129.89V112.997H138.58V111.997ZM138.08 75.0971V112.497H139.08V75.0971H138.08ZM124.665 75.5971H138.58V74.5971H124.665V75.5971ZM118.822 98.0009L125.147 75.2309L124.183 74.9633L117.858 97.7333L118.822 98.0009ZM111.26 75.2363L117.86 98.0063L118.82 97.7279L112.22 74.9579L111.26 75.2363ZM98.1002 75.5971H111.74V74.5971H98.1002V75.5971Z" />
            <path d="M130.278 193.302C126.92 189.653 118.305 183.788 110.711 189.518C116.371 198.198 126.114 195.657 130.278 193.302Z" strokeLinejoin="round" />
            <path d="M148.284 183.659C144.025 181.045 134.085 177.701 128.399 185.236C136.292 192.075 144.944 187.034 148.284 183.659Z" strokeLinejoin="round" />
            <path d="M163.889 174.304C159.371 172.138 149.125 169.826 144.284 177.9C152.871 183.896 160.932 178.001 163.889 174.304Z" strokeLinejoin="round" />
            <path d="M175.892 160.122C171.019 158.884 160.504 158.62 157.431 167.474C167.083 171.67 173.76 164.321 175.892 160.122Z" strokeLinejoin="round" />
            <path d="M185.495 146.151C180.53 145.323 170.031 145.939 167.752 155.017C177.74 158.392 183.743 150.512 185.495 146.151Z" strokeLinejoin="round" />
            <path d="M193.898 129.981C188.861 129.926 178.593 132.144 177.818 141.458C188.229 143.258 192.876 134.556 193.898 129.981Z" strokeLinejoin="round" />
            <path d="M200.5 111.24C195.498 111.823 185.615 115.323 186.096 124.655C196.659 125.122 200.1 115.906 200.5 111.24Z" strokeLinejoin="round" />
            <path d="M122.189 170.151C117.336 171.462 108.11 176.372 110.034 185.527C120.549 184.438 122.519 174.823 122.189 170.151Z" strokeLinejoin="round" />
            <path d="M135.75 163.152C131.367 165.565 123.638 172.499 127.785 180.929C137.716 177.399 137.233 167.607 135.75 163.152Z" strokeLinejoin="round" />
            <path d="M146.89 153.819C142.986 156.913 136.563 165.008 142.107 172.643C151.288 167.544 149.121 157.969 146.89 153.819Z" strokeLinejoin="round" />
            <path d="M157.432 143.32C153.977 146.883 148.698 155.724 155.22 162.59C163.637 156.37 160.202 147.152 157.432 143.32Z" strokeLinejoin="round" />
            <path d="M164.115 131.655C161.355 135.75 157.748 145.352 165.406 151.003C172.573 143.448 167.532 134.956 164.115 131.655Z" strokeLinejoin="round" />
            <path d="M171.732 117.656C169.377 121.984 166.711 131.872 174.879 136.802C181.288 128.628 175.451 120.632 171.732 117.656Z" strokeLinejoin="round" />
            <path d="M175.64 103.657C173.86 108.237 172.485 118.372 181.222 122.272C186.531 113.384 179.712 106.159 175.64 103.657Z" strokeLinejoin="round" />
            <path d="M70.7217 193.302C74.08 189.653 82.695 183.788 90.2893 189.518C84.629 198.198 74.8858 195.657 70.7217 193.302Z" strokeLinejoin="round" />
            <path d="M52.7162 183.659C56.9754 181.045 66.9152 177.701 72.6012 185.236C64.7085 192.075 56.0559 187.034 52.7162 183.659Z" strokeLinejoin="round" />
            <path d="M37.1113 174.304C41.6292 172.138 51.8753 169.826 56.7163 177.9C48.1288 183.896 40.0682 178.001 37.1113 174.304Z" strokeLinejoin="round" />
            <path d="M25.1076 160.122C29.9811 158.884 40.4963 158.62 43.5691 167.474C33.9169 171.67 27.2397 164.321 25.1076 160.122Z" strokeLinejoin="round" />
            <path d="M15.5046 146.151C20.4696 145.323 30.9693 145.939 33.2477 155.017C23.2601 158.392 17.2575 150.512 15.5046 146.151Z" strokeLinejoin="round" />
            <path d="M7.10205 129.981C12.1392 129.926 22.4071 132.144 23.1819 141.458C12.7712 143.258 8.12421 134.556 7.10205 129.981Z" strokeLinejoin="round" />
            <path d="M0.5 111.24C5.50155 111.823 15.3846 115.323 14.9045 124.655C4.34119 125.122 0.900124 115.906 0.5 111.24Z" strokeLinejoin="round" />
            <path d="M78.8108 170.151C83.6644 171.462 92.8903 176.372 90.9656 185.527C80.4509 184.438 78.4813 174.823 78.8108 170.151Z" strokeLinejoin="round" />
            <path d="M65.2505 163.152C69.6333 165.565 77.3622 172.499 73.2146 180.929C63.2838 177.399 63.7674 167.607 65.2505 163.152Z" strokeLinejoin="round" />
            <path d="M54.1096 153.819C58.0139 156.913 64.4366 165.008 58.893 172.643C49.712 167.544 51.8787 157.969 54.1096 153.819Z" strokeLinejoin="round" />
            <path d="M43.5678 143.32C47.0229 146.883 52.3025 155.724 45.7802 162.59C37.3631 156.37 40.7981 147.152 43.5678 143.32Z" strokeLinejoin="round" />
            <path d="M36.885 131.655C39.6455 135.75 43.2519 145.352 35.5943 151.003C28.4268 143.448 33.4683 134.956 36.885 131.655Z" strokeLinejoin="round" />
            <path d="M29.2683 117.656C31.6225 121.984 34.2889 131.872 26.1209 136.802C19.7121 128.628 25.5488 120.632 29.2683 117.656Z" strokeLinejoin="round" />
            <path d="M25.3604 103.657C27.1402 108.237 28.5154 118.372 19.7781 122.272C14.4694 113.384 21.2877 106.159 25.3604 103.657Z" strokeLinejoin="round" />
            <path d="M105.033 195.232C105.033 197.198 103.389 198.815 101.331 198.815C99.2735 198.815 97.6299 197.198 97.6299 195.232C97.6299 193.267 99.2735 191.649 101.331 191.649C103.389 191.649 105.033 193.267 105.033 195.232Z" />
        </svg>

    )
}

export default LogoSVG