"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[549],{549:function(n,e,i){i.r(e),i.d(e,{default:function(){return b}});var r,o,t,s,l=i(791),c=i(689),d=i(413),a=i(168),h=i(444),u=i(87),x=h.ZP.div(r||(r=(0,a.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  gap: 30px;\n  padding-top: 20px;\n"]))),v=h.ZP.div(o||(o=(0,a.Z)(["\n  display: flex;\n  gap: 30px;\n"]))),p=(0,h.ZP)(u.rU)(t||(t=(0,a.Z)(["\n  width: 100px;\n  text-align: center;\n  color: black;\n  padding: 4px 8px;\n  border: none;\n  outline: none;\n  cursor: pointer;\n\n  &:hover,\n  &:focus {\n    color: #2b96c8;\n  }\n"]))),j=h.ZP.div(s||(s=(0,a.Z)(["\n  position: relative;\n"]))),f=i(184),m=function(n){var e,i,r,o,t,s,l=n.movie,a=n.setIsLoading,h=l.date,u=l.title,m=l.tagline,g=l.poster,Z=l.popularity,w=l.genre,b=l.overview,k=(0,c.TH)(),P=null!==(e=null===(i=k.state)||void 0===i?void 0:i.from)&&void 0!==e?e:"/",y=(0,d.Z)({},k),L=null===y||void 0===y||null===(r=y.state)||void 0===r||null===(o=r.from)||void 0===o?void 0:o.pathname,C=null===y||void 0===y||null===(t=y.state)||void 0===t||null===(s=t.from)||void 0===s?void 0:s.search,I=function(){return a(!1)};return(0,f.jsxs)(x,{children:[(0,f.jsx)(p,{to:P,children:"Go back"}),(0,f.jsxs)(v,{children:[(0,f.jsx)("img",{src:g,alt:m,onLoad:I,onError:I}),(0,f.jsxs)("div",{children:[(0,f.jsxs)("div",{children:[(0,f.jsx)("h1",{children:u}),(0,f.jsx)("p",{children:"".concat(h)})]}),(0,f.jsxs)("p",{children:["Popularity: ",Z]}),(0,f.jsx)("h2",{children:"Overview"}),(0,f.jsx)("p",{children:b}),(0,f.jsx)("h2",{children:"Genres"}),(0,f.jsx)("p",{children:w})]})]}),(0,f.jsxs)(j,{children:[(0,f.jsx)("h2",{children:"Additional information"}),(0,f.jsxs)("ul",{children:[(0,f.jsx)("li",{children:(0,f.jsx)(p,{to:"cast",state:{from:{pathname:L,search:C}},children:"Cast"})}),(0,f.jsx)("li",{children:(0,f.jsx)(p,{to:"reviews",state:{from:{pathname:L,search:C}},children:"Reviews"})})]}),(0,f.jsx)(c.j3,{})]})]})},g=i(385),Z=i(306),w=i(793),b=function(){var n=(0,Z.Z)(),e=n.movie,i=n.fetchMovie,r=n.isLoading,o=n.setIsLoading,t=(0,l.useRef)(i).current,s=(0,c.UO)().moviesId;return(0,l.useEffect)((function(){var n=new AbortController;return t({fetchParams:"movie/".concat(s),controller:n}),function(){n.abort()}}),[t,s]),(0,f.jsxs)(f.Fragment,{children:[r&&(0,f.jsx)(w.Z,{}),e&&(0,f.jsx)(m,{movie:e,setIsLoading:o}),(0,f.jsx)(g.Z,{})]})}}}]);
//# sourceMappingURL=549.b24b1cec.chunk.js.map