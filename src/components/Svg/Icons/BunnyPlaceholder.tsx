import React from "react";
import { useTheme } from "styled-components";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  const theme = useTheme();
  const primaryColor = theme.isDark ? "#3C3742" : "#e9eaeb";
  const secondaryColor = theme.isDark ? "#666171" : "#bdc2c4";

  return (
    <Svg  xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" {...props}>
     {/* <g id="bunny-question" transform="translate(-624 -205.745)">
    <circle id="Ellipse_16" data-name="Ellipse 16" cx="16" cy="16" r="16" transform="translate(624 205.745)" fill="#e9eaeb"/>
    <g id="Group_133" data-name="Group 133" transform="matrix(0.996, 0.087, -0.087, 0.996, 630.767, 210.745)">
      <g id="Group_119" data-name="Group 119" transform="translate(13.706 0)">
        <path id="Path_100" data-name="Path 100" d="M.746,6.672A28.605,28.605,0,0,0,5.429,6.6C6.3,6.339,7.454,5.5,7.078,4.859s-1.807-.422-1.706-1.3S5.6,2,5.057,1.893c-1.159-.226-1.7.048-1.782-.519S3.328-.5,2.015.2.156,5.169.156,5.169-.456,6.02.746,6.672Z" transform="translate(0)" fill="#caacff"/>
      </g>
      <g id="Group_120" data-name="Group 120" transform="translate(15.477 4.862)">
        <path id="Path_101" data-name="Path 101" d="M0,1.245S3.536.41,4.245.077s.827.5.447.765S3.058,1.839,0,1.245Z" transform="translate(0 0)" fill="#ddcdfb"/>
      </g>
      <g id="Group_121" data-name="Group 121" transform="translate(16.253 2.818)">
        <path id="Path_102" data-name="Path 102" d="M.418,2.591S2.93,1.41,2.608.366.652.771.337,1.448-.263,2.62.418,2.591Z" transform="translate(0 0)" fill="#ddcdfb"/>
      </g>
      <g id="Group_122" data-name="Group 122" transform="translate(14.839 1.598)">
        <path id="Path_103" data-name="Path 103" d="M2.222.9A10.4,10.4,0,0,0,.735,3.06c-.328.844-.538.976-.7.412S.363.012,1.369,0C1.9-.006,2.155.22,2.222.9Z" transform="translate(0 0)" fill="#ddcdfb"/>
      </g>
      <g id="Group_123" data-name="Group 123" transform="translate(0 13.528)">
        <path id="Path_104" data-name="Path 104" d="M6.336,0A28.613,28.613,0,0,0,1.66.265C.8.565-.318,1.45.085,2.076s1.823.346,1.759,1.23-.164,1.566.384,1.649c1.167.178,1.693-.118,1.8.444s.024,1.876,1.307,1.118S6.989,1.478,6.989,1.478,7.564.6,6.336,0Z" transform="translate(0 0)" fill="#caacff"/>
      </g>
      <g id="Group_124" data-name="Group 124" transform="translate(0.469 13.992)">
        <path id="Path_105" data-name="Path 105" d="M4.866.145s-3.5.982-4.193,1.343S-.174,1.021.195.742,1.786-.322,4.866.145Z" transform="translate(0 0)" fill="#ddcdfb"/>
      </g>
      <g id="Group_125" data-name="Group 125" transform="translate(2.039 14.879)">
        <path id="Path_106" data-name="Path 106" d="M2.133,0S-.329,1.289.037,2.318s1.937-.485,2.224-1.175S2.812-.053,2.133,0Z" transform="translate(0 0)" fill="#ddcdfb"/>
      </g>
      <g id="Group_126" data-name="Group 126" transform="translate(3.903 14.815)">
        <path id="Path_107" data-name="Path 107" d="M0,3A10.4,10.4,0,0,0,1.4.773c.293-.857.5-1,.686-.44S1.894,3.8.889,3.857C.356,3.885.095,3.669,0,3Z" transform="translate(0 0)" fill="#ddcdfb"/>
      </g>
      <g id="Group_128" data-name="Group 128" transform="translate(4.774 4.509)">
        <g id="Group_127" data-name="Group 127" transform="translate(0 0)">
          <path id="Path_108" data-name="Path 108" d="M9.827,1.353c.35.361,1.013.68,1.2,1.132.845,2,.145,4.736-1.9,6.716-2.025,1.964-4.751,2.585-6.725,1.71-.464-.206-.771-.729-1.133-1.1A3.547,3.547,0,0,1,.181,8.33,6.521,6.521,0,0,1,2.247,2.1,6.528,6.528,0,0,1,8.524.219C9.165.421,9.351.862,9.827,1.353Z" fill="#caacff"/>
        </g>
      </g>
      <g id="Group_129" data-name="Group 129" transform="translate(4.807 4.511)">
        <path id="Path_109" data-name="Path 109" d="M.854,2.4A1.282,1.282,0,0,0,1.567.735,1.273,1.273,0,0,0,.779,0,6.61,6.61,0,0,0,0,2.43,1.269,1.269,0,0,0,.854,2.4Z" transform="translate(0 3.979)" fill="#ddcdfb"/>
        <path id="Path_110" data-name="Path 110" d="M.805.092A1.281,1.281,0,1,0,2.471.805,1.281,1.281,0,0,0,.805.092Z" transform="translate(3.153 1.034)" fill="#ddcdfb"/>
        <path id="Path_111" data-name="Path 111" d="M.805.092A1.281,1.281,0,1,0,2.471.805,1.281,1.281,0,0,0,.805.092Z" transform="translate(2.509 5.177)" fill="#ddcdfb"/>
        <path id="Path_112" data-name="Path 112" d="M.805.092A1.281,1.281,0,1,0,2.471.805,1.281,1.281,0,0,0,.805.092Z" transform="translate(6.804 3.533)" fill="#ddcdfb"/>
        <path id="Path_113" data-name="Path 113" d="M.092,1.2A1.277,1.277,0,0,0,2.552.846,1.763,1.763,0,0,0,1.687.217,4.882,4.882,0,0,0,.224,0,1.279,1.279,0,0,0,.092,1.2Z" transform="translate(6.805)" fill="#ddcdfb"/>
        <path id="Path_114" data-name="Path 114" d="M.849,0C.835.005.82.007.805.013a1.278,1.278,0,0,0,.3,2.453A4.941,4.941,0,0,0,.849,0Z" transform="translate(10.19 2.596)" fill="#ddcdfb"/>
        <path id="Path_115" data-name="Path 115" d="M.805.092A1.277,1.277,0,0,0,1.15,2.551c.157-.13.311-.266.461-.411a7.994,7.994,0,0,0,.932-1.084,1.3,1.3,0,0,0-.072-.25A1.281,1.281,0,0,0,.805.092Z" transform="translate(7.491 7.058)" fill="#ddcdfb"/>
        <path id="Path_116" data-name="Path 116" d="M2.471.805A1.281,1.281,0,1,0,.22,2,6.035,6.035,0,0,0,2.5,1.661,1.27,1.27,0,0,0,2.471.805Z" transform="translate(3.78 9.289)" fill="#ddcdfb"/>
        <path id="Path_117" data-name="Path 117" d="M1.714.805A1.281,1.281,0,0,0,.048.092C.031.1.017.11,0,.117,0,.124,0,.132.005.139A3.547,3.547,0,0,0,1.1,1.617c.14.145.272.311.408.474A1.276,1.276,0,0,0,1.714.805Z" transform="translate(0.143 8.189)" fill="#ddcdfb"/>
      </g>
      <g id="Group_130" data-name="Group 130" transform="translate(4.774 4.509)" opacity="0.2">
        <path id="Path_118" data-name="Path 118" d="M10.7,2.686c0-.22-.014-.437-.033-.652-.273-.24-.621-.453-.843-.682C9.351.862,9.165.421,8.524.219A6.528,6.528,0,0,0,2.247,2.1,6.521,6.521,0,0,0,.181,8.33,2.4,2.4,0,0,0,.836,9.363a7.164,7.164,0,0,0,2.672.518A7.2,7.2,0,0,0,10.7,2.686Z" transform="translate(0 0)" fill="#fff"/>
      </g>
      <g id="Group_132" data-name="Group 132" transform="translate(5.267 5.238)" opacity="0.5">
        <g id="Group_131" data-name="Group 131" transform="translate(0 0)">
          <path id="Path_119" data-name="Path 119" d="M7.814.235s-.2.034-.532.106C7.116.374,6.916.429,6.69.48S6.214.613,5.945.7s-.554.184-.843.31L4.881,1.1,4.661,1.2a4.776,4.776,0,0,0-.444.226,8.4,8.4,0,0,0-.867.547c-.135.108-.269.22-.409.324s-.252.242-.379.362a3.764,3.764,0,0,0-.352.388l-.172.2c-.054.069-.1.143-.15.213l-.148.213-.076.1-.038.052-.01.013,0,0c0-.008-.012.021.008-.016l0,.008-.018.03c-.088.158-.2.333-.267.468A6.279,6.279,0,0,0,.95,5.2,6.6,6.6,0,0,0,.7,6.045,7.308,7.308,0,0,0,.579,6.8c-.023.228-.037.431-.041.6-.007.338.009.539.009.539a2.535,2.535,0,0,1-.246-.5A4.625,4.625,0,0,1,0,5.989a5.138,5.138,0,0,1,.06-1.008,4.333,4.333,0,0,1,.116-.544,4.692,4.692,0,0,1,.185-.569c.07-.2.15-.344.228-.522C.7,3.134.8,2.984.916,2.8c.056-.088.108-.179.168-.265l.2-.247a4.607,4.607,0,0,1,.42-.478c.157-.144.31-.293.47-.431s.343-.247.512-.369A6.241,6.241,0,0,1,3.767.457,4.109,4.109,0,0,1,4.311.27a3.929,3.929,0,0,1,.53-.133A6.5,6.5,0,0,1,5.823.01c.153,0,.3-.013.436-.009L6.651.02A5.618,5.618,0,0,1,7.28.1a3.887,3.887,0,0,1,.4.091C7.768.217,7.814.235,7.814.235Z" fill="#fff"/>
        </g>
      </g>
    </g>
  </g> */}
    </Svg>
  );
};

export default Icon;
