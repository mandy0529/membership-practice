(this["webpackJsonpmembership-practice"]=this["webpackJsonpmembership-practice"]||[]).push([[0],{72:function(e,t,n){"use strict";n.r(t);var r,a,i,c,o,s,l,d,p,u,b,h,j,g,x,m,v,O,f,y,_,w,k,S,z,U,M,D,I,R,W,C,P,T,N,B,A,q=n(1),H=n.n(q),J=n(38),L=n.n(J),E=n(18),F=n(5),G=n(10),K=n.n(G),Q=n(13),V=n(14),X=n(15),Y=n(17),Z=n(16),$=n(24),ee=n.n($),te=ee.a.create({baseURL:"https://api.themoviedb.org/3/",params:{api_key:"6e5e83e40bbc960162e2fcf42a1d5b9f",language:"en-US"}}),ne=(ee.a.create({baseURL:"https://api.themoviedb.org/3/",params:{api_key:"6e5e83e40bbc960162e2fcf42a1d5b9f"}}),function(){return te.get("movie/now_playing")}),re=function(){return te.get("movie/upcoming")},ae=function(){return te.get("movie/popular")},ie=function(e){return te.get("movie/".concat(e),{params:{append_to_response:"videos"}})},ce=function(e){return te.get("search/movie",{params:{query:encodeURI(e)}})},oe=function(){return te.get("tv/top_rated")},se=function(){return te.get("tv/popular")},le=function(){return te.get("tv/airing_today")},de=function(e){return te.get("tv/".concat(e),{params:{append_to_response:"videos"}})},pe=function(e){return te.get("search/tv",{params:{query:encodeURI(e)}})},ue=n(3),be=n(2),he=n(0),je=be.c.div(r||(r=Object(ue.a)(["\n  margin: 20px 0;\n  :not(:last-child) {\n    margin-bottom: 60px;\n  }\n"]))),ge=be.c.span(a||(a=Object(ue.a)(["\n  font-size: 30px;\n  font-weight: bold;\n  margin: 10px 20px;\n"]))),xe=be.c.div(i||(i=Object(ue.a)(["\n  margin: 30px;\n  display: grid;\n  grid-template-columns: repeat(auto-fill, 125px);\n  grid-gap: 25px;\n"]))),me=function(e){var t=e.title,n=e.children;return Object(he.jsxs)(je,{children:[Object(he.jsx)(ge,{children:t}),Object(he.jsx)(xe,{children:n})]})},ve=be.c.div(c||(c=Object(ue.a)(["\n  font-size: 34px;\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  margin-top: 100px;\n"]))),Oe=function(){return Object(he.jsx)(ve,{children:Object(he.jsx)("span",{role:"img","aria-label":"loading",children:"\u23f1"})})},fe=be.c.div(o||(o=Object(ue.a)(["\n  width: 100vw;\n  display: flex;\n  justify-content: center;\n"]))),ye=be.c.span(s||(s=Object(ue.a)(["\n  font-size: 30px;\n  color: ",";\n"])),(function(e){return e.color})),_e=function(e){var t=e.text,n=e.color;return Object(he.jsx)(fe,{children:Object(he.jsx)(ye,{color:n,children:t})})},we=be.c.div(l||(l=Object(ue.a)(["\n  position: absolute;\n  margin-top: -20px;\n  margin-left: 5px;\n  opacity: 0;\n  transition: all 300ms linear;\n"]))),ke=be.c.div(d||(d=Object(ue.a)(["\n  font-size: 12px;\n  transition: all 300ms ease-in-out;\n  &:hover {\n    transform: scale(1.2);\n    "," {\n      opacity: 1;\n    }\n  }\n"])),we),Se=be.c.div(p||(p=Object(ue.a)(["\n  background-image: url(",");\n  height: 180px;\n  background-size: cover;\n  border-radius: 5px;\n  background-position: center;\n"])),(function(e){return e.bgUrl})),ze=be.c.div(u||(u=Object(ue.a)(["\n  margin-bottom: 5px;\n  position: relative;\n  &:hover {\n    "," {\n      opacity: 0.3;\n    }\n  }\n"])),Se),Ue=be.c.span(b||(b=Object(ue.a)(["\n  opacity: 0.5;\n"]))),Me=be.c.span(h||(h=Object(ue.a)(["\n  display: block;\n  font-weight: bold;\n  margin: 3px;\n"]))),De=be.c.span(j||(j=Object(ue.a)(["\n  padding-right: 4px;\n"]))),Ie=function(e){var t=e.id,n=e.title,r=e.year,a=e.rating,i=e.imgUrl,c=e.isMovie,o=void 0!==c&&c;return Object(he.jsx)(E.b,{to:o?"/movie/".concat(t):"/tv/".concat(t),children:Object(he.jsxs)(ke,{children:[Object(he.jsxs)(ze,{children:[Object(he.jsx)(Se,{bgUrl:i?"https://image.tmdb.org/t/p/w500/".concat(i):"noImage.jpeg"}),Object(he.jsxs)(we,{children:[Object(he.jsx)(De,{role:"img","aria-label":"rating",children:"\u2b50\ufe0f"}),a," / 10"]})]}),Object(he.jsx)(Me,{children:n.length>18?"".concat(n.substring(0,18),"..."):n}),Object(he.jsx)(Ue,{children:r})]})})},Re=n(12),We=be.c.div(g||(g=Object(ue.a)(["\n  margin: 20px;\n"]))),Ce=function(e){var t=e.nowPlaying,n=e.upcoming,r=e.popular,a=e.error,i=e.loading;return Object(he.jsxs)("div",{children:[Object(he.jsx)(Re.a,{children:Object(he.jsx)("title",{children:"movie | minjiflex"})}),i?Object(he.jsx)(Oe,{}):Object(he.jsxs)(We,{children:[t&&t.length>0&&Object(he.jsx)(me,{title:"Now Playing",children:t.map((function(e){return Object(he.jsx)(Ie,{id:e.id,year:e.release_date&&e.release_date.substr(0,4),rating:e.vote_average,imgUrl:e.poster_path,isMovie:!0,title:e.original_title},e.id)}))}),n&&n.length>0&&Object(he.jsx)(me,{title:"upcoming",children:n.map((function(e){return Object(he.jsx)(Ie,{id:e.id,year:e.release_date&&e.release_date.substr(0,4),rating:e.vote_average,imgUrl:e.poster_path,isMovie:!0,title:e.original_title},e.id)}))}),r&&r.length>0&&Object(he.jsx)(me,{title:"popular movies",children:r.map((function(e){return Object(he.jsx)(Ie,{id:e.id,year:e.release_date&&e.release_date.substr(0,4),rating:e.vote_average,imgUrl:e.poster_path,isMovie:!0,title:e.original_title},e.id)}))}),a&&Object(he.jsx)(_e,{color:"gray",text:a})]}),";"]})},Pe=function(e){Object(Y.a)(n,e);var t=Object(Z.a)(n);function n(){var e;Object(V.a)(this,n);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={nowPlaying:null,upcoming:null,popular:null,error:null,loading:!0,search:null},e}return Object(X.a)(n,[{key:"componentDidMount",value:function(){var e=Object(Q.a)(K.a.mark((function e(){var t,n,r,a,i,c;return K.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ne();case 3:return t=e.sent,n=t.data.results,e.next=7,ae();case 7:return r=e.sent,a=r.data.results,e.next=11,re();case 11:i=e.sent,c=i.data.results,this.setState({nowPlaying:n,popular:a,upcoming:c}),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(0),this.setState({error:"can't find anything"});case 19:return e.prev=19,this.setState({loading:!1}),e.finish(19);case 22:case"end":return e.stop()}}),e,this,[[0,16,19,22]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){console.log(this.state);var e=this.state,t=e.nowPlaying,n=e.upcoming,r=e.popular,a=e.error,i=e.loading,c=e.search;return Object(he.jsx)(Ce,{nowPlaying:t,upcoming:n,popular:r,error:a,loading:i,search:c})}}]),n}(H.a.Component),Te=be.c.div(x||(x=Object(ue.a)(["\n  height: calc(100vh - 50px);\n  width: 100%;\n  position: relative;\n  padding: 50px;\n"]))),Ne=be.c.div(m||(m=Object(ue.a)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-image: url(",");\n  background-size: cover;\n  background-position: center center;\n  filter: blur(3px);\n  opacity: 0.4;\n  z-index: 0;\n"])),(function(e){return e.bgImage})),Be=be.c.div(v||(v=Object(ue.a)(["\n  width: 100%;\n  height: 100%;\n  z-index: 1;\n  position: relative;\n  display: flex;\n  margin-left: 100px;\n"]))),Ae=be.c.div(O||(O=Object(ue.a)(["\n  margin: 30px;\n  width: 30%;\n  height: 80%;\n  background-image: url(",");\n  background-size: cover;\n  background-position: center center;\n  border-radius: 10px;\n"])),(function(e){return e.posterImage})),qe=be.c.div(f||(f=Object(ue.a)(["\n  width: 70%;\n  padding-left: 20px;\n  padding: 30px;\n"]))),He=be.c.div(y||(y=Object(ue.a)(["\n  font-size: 32px;\n  font-weight: bold;\n"]))),Je=be.c.div(_||(_=Object(ue.a)(["\n  display: flex;\n  align-items: center;\n  margin-bottom: 30px;\n"]))),Le=be.c.div(w||(w=Object(ue.a)([""]))),Ee=be.c.span(k||(k=Object(ue.a)(["\n  font-size: 20px;\n  width: 80%;\n"]))),Fe=be.c.span(S||(S=Object(ue.a)(["\n  font-size: 30px;\n  font-weight: bold;\n  margin: 3px 5px;\n"]))),Ge=be.c.p(z||(z=Object(ue.a)(["\n  font-size: 16px;\n  opacity: 0.7;\n  line-height: 1.5;\n  margin-top: 30px;\n  width: 50%;\n"]))),Ke=be.c.a(U||(U=Object(ue.a)(["\n  display: block;\n  position: relative;\n  margin: 50px;\n  border: 4px solid white;\n  width: 230px;\n  height: 40px;\n  font-size: 20px;\n  color: white;\n  text-align: center;\n  border-radius: 10px;\n  transition: all 300ms ease-in;\n  padding-top: 5px;\n  font-weight: bold;\n  &:hover {\n    background-color: white;\n    color: black;\n  }\n"]))),Qe=be.c.div(M||(M=Object(ue.a)(["\n  padding: 5px;\n"]))),Ve=be.c.div(D||(D=Object(ue.a)(["\n  opacity: 0;\n"]))),Xe=be.c.button(I||(I=Object(ue.a)(["\n  cursor: pointer;\n  transition: all 300ms ease-in;\n  margin: 0 10px;\n  border-radius: 5px;\n  width: 120px;\n  height: 40px;\n  border: 4px solid white;\n  background-color: transparent;\n  color: white;\n  text-align: center;\n  padding-top: 3px;\n  font-size: 25px;\n  font-weight: bold;\n"]))),Ye=be.c.div(R||(R=Object(ue.a)(["\n  display: flex;\n  align-items: center;\n  &:hover {\n    "," {\n      background-color: white;\n      color: black;\n    }\n    "," {\n      opacity: 1;\n    }\n  }\n"])),Xe,Ve),Ze=be.c.div(W||(W=Object(ue.a)(["\n  display: flex;\n  background-image: url(",");\n  background-size: cover;\n  background-position: center center;\n"])),(function(e){return e.posterImg})),$e=function(e){var t=e.detail,n=(e.error,e.loading);e.path;return Object(he.jsxs)("div",{children:[n?Object(he.jsxs)("div",{children:[Object(he.jsx)(Oe,{}),Object(he.jsx)(Re.a,{children:Object(he.jsx)("title",{children:"loading | minjiflex "})})]}):Object(he.jsxs)(Te,{children:[Object(he.jsx)(Re.a,{children:Object(he.jsx)("title",{children:t.original_name?t.original_name:t.original_title})}),Object(he.jsx)(Ne,{bgImage:"https://image.tmdb.org/t/p/original/".concat(t.backdrop_path)}),Object(he.jsxs)(Be,{children:[Object(he.jsx)(Ae,{posterImage:"https://image.tmdb.org/t/p/original/".concat(t.poster_path)}),Object(he.jsxs)(qe,{children:[Object(he.jsxs)(Je,{children:[Object(he.jsx)(He,{children:t.original_title?t.original_title:t.original_name}),Object(he.jsxs)(Ye,{children:[Object(he.jsx)(Xe,{children:"season"}),Object(he.jsx)(Ve,{children:t.seasons&&t.seasons.map((function(e,n){return n===t.seasons.length-1?e.name:"".concat(e.name," / ")}))}),Object(he.jsx)(Ze,{posterImg:"https://image.tmdb.org/t/p/w300/".concat(t.seasons.poster_path),children:t.seasons.map((function(e){return e.poster_path}))})]})]}),Object(he.jsxs)(Le,{children:[Object(he.jsx)(Ee,{children:t.release_date?t.release_date.substring(0,4):t.first_air_date.substring(0,4)}),Object(he.jsx)(Fe,{children:" \xb7 "}),Object(he.jsx)(Ee,{children:t.origin_country?t.origin_country:t.production_countries&&t.production_countries.map((function(e){return e.name}))}),Object(he.jsx)(Fe,{children:" \xb7 "}),Object(he.jsxs)(Ee,{children:[t.runtime?t.runtime:t.episode_run_time," ","min"]}),Object(he.jsx)(Qe,{}),Object(he.jsx)(Fe,{children:" \xb7 "}),Object(he.jsx)(Ee,{children:t.genres&&t.genres.map((function(e,n){return n===t.genres.length-1?e.name:"".concat(e.name," / ")}))})]}),Object(he.jsx)(Ge,{children:t.overview}),Object(he.jsx)(Ke,{href:t.homepage,children:"\u2192 streaming link bio"})]})]})]}),";"]})},et=function(e){Object(Y.a)(n,e);var t=Object(Z.a)(n);function n(e){var r;Object(V.a)(this,n),r=t.call(this,e);var a=e.location.pathname;return r.state={detail:null,error:null,loading:!0,isMovie:a.includes("/movie/"),numberId:null},r}return Object(X.a)(n,[{key:"componentDidMount",value:function(){var e=Object(Q.a)(K.a.mark((function e(){var t,n,r,a,i,c,o,s,l,d;return K.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=this.props,n=t.match,r=n.params.id,a=n.path,i=t.history.push,console.log(this.props,"\uc774\uac74 \ud504\ub8f9"),c=this.state.isMovie,o=Number(r),!isNaN(o)){e.next=6;break}return e.abrupt("return",i("/"));case 6:if(s=null,e.prev=7,!c){e.next=15;break}return e.next=11,ie(o);case 11:l=e.sent,s=l.data,e.next=19;break;case 15:return e.next=17,de(o);case 17:d=e.sent,s=d.data;case 19:console.log(s),e.next=25;break;case 22:e.prev=22,e.t0=e.catch(7),this.setState({error:"can't find any detail"});case 25:return e.prev=25,this.setState({loading:!1,detail:s,path:a,numberId:o}),e.finish(25);case 28:case"end":return e.stop()}}),e,this,[[7,22,25,28]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.detail,n=e.error,r=e.loading;return Object(he.jsx)($e,{detail:t,error:n,loading:r})}}]),n}(H.a.Component),tt=be.c.div(C||(C=Object(ue.a)([""]))),nt=function(e){var t=e.topRated,n=e.airingToday,r=e.popular,a=e.error,i=e.loading;return Object(he.jsxs)("div",{children:[Object(he.jsx)(Re.a,{children:Object(he.jsx)("title",{children:"show | minjiflex"})}),i?Object(he.jsx)(Oe,{}):Object(he.jsxs)(tt,{children:[t&&t.length>0&&Object(he.jsx)(me,{title:"top Rated shows",children:t.map((function(e){return Object(he.jsx)(Ie,{id:e.id,year:e.first_air_date&&e.first_air_date.substr(0,4),rating:e.vote_average,imgUrl:e.poster_path,isMovie:!1,title:e.original_name},e.id)}))}),n&&t.length>0&&Object(he.jsx)(me,{title:"airing Today shows",children:n.map((function(e){return Object(he.jsx)(Ie,{id:e.id,year:e.first_air_date&&e.first_air_date.substr(0,4),rating:e.vote_average,imgUrl:e.poster_path,isMovie:!1,title:e.original_name},e.id)}))}),r&&r.length>0&&Object(he.jsx)(me,{title:"popular shows",children:r.map((function(e){return Object(he.jsx)(Ie,{id:e.id,year:e.first_air_date&&e.first_air_date.substr(0,4),rating:e.vote_average,imgUrl:e.poster_path,isMovie:!1,title:e.original_name},e.id)}))}),a&&Object(he.jsx)(_e,{color:"gray",text:a})]})]})},rt=function(e){Object(Y.a)(n,e);var t=Object(Z.a)(n);function n(){var e;Object(V.a)(this,n);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={topRated:null,airingToday:null,popular:null,error:null,loading:!0,search:null},e}return Object(X.a)(n,[{key:"componentDidMount",value:function(){var e=Object(Q.a)(K.a.mark((function e(){var t,n,r,a,i,c;return K.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,oe();case 3:return t=e.sent,n=t.data.results,e.next=7,se();case 7:return r=e.sent,a=r.data.results,e.next=11,le();case 11:i=e.sent,c=i.data.results,this.setState({topRated:n,popular:a,airingToday:c}),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(0),this.setState({error:"can't find any shows"});case 19:return e.prev=19,this.setState({loading:!1}),e.finish(19);case 22:case"end":return e.stop()}}),e,this,[[0,16,19,22]])})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){console.log(this.state);var e=this.state,t=e.topRated,n=e.airingToday,r=e.popular,a=e.error,i=e.loading,c=e.search;return Object(he.jsx)(nt,{topRated:t,airingToday:n,popular:r,error:a,loading:i,search:c})}}]),n}(H.a.Component),at=be.c.div(P||(P=Object(ue.a)(["\n  padding: 20px 30px;\n"]))),it=be.c.form(T||(T=Object(ue.a)(["\n  margin-bottom: 50px;\n"]))),ct=be.c.input(N||(N=Object(ue.a)(["\n  all: unset;\n  width: 100%;\n  height: 30px;\n  font-size: 28px;\n"]))),ot=function(e){var t=e.movieDetail,n=e.showDetail,r=e.searchWord,a=e.error,i=e.loading,c=e.handleSubmit,o=e.updateSubmit;return Object(he.jsxs)(at,{children:[Object(he.jsx)(it,{onSubmit:c,children:Object(he.jsx)(ct,{placeholder:"search of tv shows or movies...",value:r,onChange:o})}),Object(he.jsx)(Re.a,{children:Object(he.jsx)("title",{children:"search | minjiflex"})}),i?Object(he.jsx)(Oe,{}):Object(he.jsx)("div",{children:t&&t.length>0&&Object(he.jsx)(me,{title:"movie results",children:t.map((function(e){return Object(he.jsx)(Ie,{id:e.id,year:e.release_date&&e.release_date.substr(0,4),rating:e.vote_average,imgUrl:e.poster_path,isMovie:!0,title:e.original_title},e.id)}))})}),i?Object(he.jsx)(Oe,{}):Object(he.jsx)("div",{children:n&&n.length>0&&Object(he.jsx)(me,{title:"show results",children:n.map((function(e){return Object(he.jsx)(Ie,{id:e.id,year:e.first_air_date&&e.first_air_date.substr(0,4),rating:e.vote_average,imgUrl:e.poster_path,isMovie:!1,title:e.original_name},e.id)}))})}),a&&Object(he.jsx)(_e,{color:"gray",text:a}),t&&n&&0===t.length&&0===n.length&&Object(he.jsx)(_e,{color:"gray",text:'nothing found "'.concat(r,'"')})]})},st=function(e){Object(Y.a)(n,e);var t=Object(Z.a)(n);function n(){var e;Object(V.a)(this,n);for(var r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return(e=t.call.apply(t,[this].concat(a))).state={movieDetail:null,tvDetail:null,searchWord:"",error:null,loading:!1},e.handleSubmit=function(t){t.preventDefault();var n=e.state.searchWord;""!==n&&e.searchByWord(n)},e.updateSubmit=function(t){var n=t.target.value;console.log(n),e.setState({searchWord:n})},e}return Object(X.a)(n,[{key:"searchByWord",value:function(){var e=Object(Q.a)(K.a.mark((function e(t){var n,r,a,i;return K.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({loading:!0}),e.prev=1,e.next=4,ce(t);case 4:return n=e.sent,r=n.data.results,e.next=8,pe(t);case 8:a=e.sent,i=a.data.results,this.setState({movieDetail:r,showDetail:i}),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(1),this.setState({error:"can't find anything."});case 16:return e.prev=16,this.setState({loading:!1}),e.finish(16);case 19:case"end":return e.stop()}}),e,this,[[1,13,16,19]])})));return function(t){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.searchWord,n=e.movieDetail,r=e.showDetail,a=e.error,i=e.loading;return Object(he.jsx)(ot,{searchWord:t,movieDetail:n,showDetail:r,error:a,loading:i,handleSubmit:this.handleSubmit,updateSubmit:this.updateSubmit})}}]),n}(H.a.Component),lt=be.c.ul(B||(B=Object(ue.a)(["\n  display: flex;\n  align-items: center;\n  background-color: rgba(20, 20, 20, 0.8);\n  height: 50px;\n  margin: 10px;\n"]))),dt=be.c.li(A||(A=Object(ue.a)(["\n  padding: 10px 20px;\n  font-size: 18px;\n  font-weight: bold;\n  transition: all 300ms ease-in-out;\n  border-bottom: 5px solid\n    ",";\n  &:hover {\n    transform: scale(1.2);\n  }\n"])),(function(e){return e.current?"white":"transparent"}));var pt=Object(F.g)((function(e){var t=e.location.pathname;return Object(he.jsxs)(lt,{children:[Object(he.jsx)(dt,{current:"/"===t,children:Object(he.jsx)(E.b,{to:"/",children:"Home"})}),Object(he.jsx)(dt,{current:"/show"===t,children:Object(he.jsx)(E.b,{to:"/show",children:"Shows"})}),Object(he.jsx)(dt,{current:"/search"===t,children:Object(he.jsx)(E.b,{to:"/search",children:"Search"})})]})}));var ut,bt=function(){return Object(he.jsxs)(E.a,{children:[Object(he.jsx)(pt,{}),Object(he.jsxs)(F.d,{children:[Object(he.jsx)(F.b,{path:"/",exact:!0,component:Pe}),Object(he.jsx)(F.b,{path:"/search",exact:!0,component:st}),Object(he.jsx)(F.b,{path:"/show",exact:!0,component:rt}),Object(he.jsx)(F.b,{path:"/movie/:id",exact:!0,component:et}),Object(he.jsx)(F.b,{path:"/tv/:id",exact:!0,component:et}),Object(he.jsx)(F.a,{from:"*",to:"/"})]})]})},ht=n(44),jt=Object(be.a)(ut||(ut=Object(ue.a)(["\n",";\na {\n    text-decoration: none;\n    color:inherit;\n}\n* {\n    box-sizing:border-box;\n}\nbody {\n    font-size:18px;\n    font-family:--apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n    background-color:rgba(20, 20,20,1);\n    color:white;\n    margin:10px auto;\n}\n"])),ht.a);var gt=function(){return Object(he.jsxs)("div",{children:[Object(he.jsx)(jt,{}),Object(he.jsx)(bt,{})]})};L.a.render(Object(he.jsx)(H.a.StrictMode,{children:Object(he.jsx)(gt,{})}),document.getElementById("root"))}},[[72,1,2]]]);
//# sourceMappingURL=main.ec7b2c0e.chunk.js.map