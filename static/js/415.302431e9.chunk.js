"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[415],{472:function(n,e,t){t.d(e,{Z:function(){return Z}});var o,r,i,s,a,c=t(439),l=t(689),u=t(791),f=t(168),d=t(87),h=t(444),m=h.ZP.ul(o||(o=(0,f.Z)(["\n  display: grid;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n  grid-gap: 20px;\n  padding-top: 20px;\n"]))),p=h.ZP.li(r||(r=(0,f.Z)(["\n  text-align: center;\n"]))),g=(0,h.ZP)(d.rU)(i||(i=(0,f.Z)(["\n  color: black;\n  font-size: 16px;\n  font-weight: 500;\n\n  &:hover,\n  &:focus {\n    color: #2b96c8;\n  }\n"]))),v=h.ZP.div(s||(s=(0,f.Z)(["\n  position: relative;\n"]))),x=(h.ZP.div(a||(a=(0,f.Z)(["\n  position: absolute;\n  bottom: 0;\n  left: 0;\n\n  width: 50px;\n"]))),t(184)),Z=function(n){var e=n.movies,t=n.setIsLoading,o=(0,l.TH)(),r=(0,u.useState)(0),i=(0,c.Z)(r,2),s=i[0],a=i[1],f=function(){a(s+1)};return(0,u.useEffect)((function(){s===e.length&&t(!1)}),[s,e.length,t]),(0,x.jsx)(m,{children:e.map((function(n){var e=n.title,t=n.id,r=n.poster;return(0,x.jsx)(p,{children:(0,x.jsxs)(g,{to:"/movies/".concat(t),state:{from:o},children:[(0,x.jsx)(v,{children:(0,x.jsx)("img",{src:r,alt:e,onLoad:f,onError:f})}),(0,x.jsx)("h2",{children:e})]})},t)}))})}},415:function(n,e,t){t.r(e);var o=t(791),r=t(472),i=t(385),s=t(306),a=t(184);e.default=function(){var n=(0,s.Z)(),e=n.movies,t=n.isLoading,c=n.setIsLoading,l=n.fetchMoviesList,u=(0,o.useRef)(l).current;return(0,o.useEffect)((function(){var n=new AbortController;return u({fetchParams:"trending/movie/week",controller:n}),function(){n.abort()}}),[u]),(0,a.jsxs)(a.Fragment,{children:[t,!!e.length&&(0,a.jsx)(r.Z,{movies:e,isLoading:t,setIsLoading:c}),(0,a.jsx)(i.Z,{})]})}}}]);
//# sourceMappingURL=415.302431e9.chunk.js.map