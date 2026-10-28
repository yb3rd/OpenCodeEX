"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const le=require("solid-js/web"),Zn=require("@opencode/plugin/gui"),Qe=require("solid-js");const ea="186",gl=0,ba=1,_l=2,pr=1,xl=2,wi=3,kn=0,Ot=1,gn=2,xn=0,Ci=1,Ta=2,Aa=3,wa=4,vl=5,di=100,Ml=101,Sl=102,El=103,yl=104,bl=200,Tl=201,Al=202,wl=203,Ro=204,Co=205,Rl=206,Cl=207,Pl=208,Ll=209,Dl=210,Il=211,Ul=212,Nl=213,Fl=214,us=0,hs=1,fs=2,Di=3,ps=4,ms=5,gs=6,_s=7,Po=0,Ol=1,Bl=2,on=0,Lo=1,Do=2,Io=3,Uo=4,No=5,Fo=6,Oo=7,Bo=300,Wn=301,pi=302,Pr=303,Lr=304,Ar=306,xs=1e3,_n=1001,vs=1002,At=1003,zl=1004,Xi=1005,Lt=1006,Dr=1007,Gn=1008,Gt=1009,zo=1010,Go=1011,Ii=1012,ta=1013,ln=1014,sn=1015,cn=1016,na=1017,ia=1018,Ui=1020,Ho=35902,Vo=35899,ko=1021,Wo=1022,Jt=1023,Sn=1026,Hn=1027,Xo=1028,ra=1029,Xn=1030,sa=1031,aa=1033,mr=33776,gr=33777,_r=33778,xr=33779,Ms=35840,Ss=35841,Es=35842,ys=35843,bs=36196,Ts=37492,As=37496,ws=37488,Rs=37489,Mr=37490,Cs=37491,Ps=37808,Ls=37809,Ds=37810,Is=37811,Us=37812,Ns=37813,Fs=37814,Os=37815,Bs=37816,zs=37817,Gs=37818,Hs=37819,Vs=37820,ks=37821,Ws=36492,Xs=36494,qs=36495,Ys=36283,$s=36284,Sr=36285,Ks=36286,Gl=3200,Zs=0,Hl=1,Ln="",kt="srgb",Er="srgb-linear",yr="linear",et="srgb",Ir=7680,Vl=519,kl=512,Wl=513,Xl=514,oa=515,ql=516,Yl=517,la=518,$l=519,Kl=35044,Ra="300 es",an=2e3,Ni=2001;function Zl(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function br(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Jl(){const i=br("canvas");return i.style.display="block",i}const Ca={};function Pa(...i){const e="THREE."+i.shift();console.log(e,...i)}function qo(i){const e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Pe(...i){i=qo(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function Ke(...i){i=qo(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function hi(...i){const e=i.join(" ");e in Ca||(Ca[e]=!0,Pe(...i))}function Ql(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}const jl={[us]:hs,[fs]:gs,[ps]:_s,[Di]:ms,[hs]:us,[gs]:fs,[_s]:ps,[ms]:Di};class qn{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const r=n[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Ct=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ur=Math.PI/180,Js=180/Math.PI;function Oi(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ct[i&255]+Ct[i>>8&255]+Ct[i>>16&255]+Ct[i>>24&255]+"-"+Ct[e&255]+Ct[e>>8&255]+"-"+Ct[e>>16&15|64]+Ct[e>>24&255]+"-"+Ct[t&63|128]+Ct[t>>8&255]+"-"+Ct[t>>16&255]+Ct[t>>24&255]+Ct[n&255]+Ct[n>>8&255]+Ct[n>>16&255]+Ct[n>>24&255]).toLowerCase()}function ke(i,e,t){return Math.max(e,Math.min(t,i))}function ec(i,e){return(i%e+e)%e}function Nr(i,e,t){return(1-t)*i+t*e}function Mi(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Ft(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const pa=class pa{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ke(this.x,e.x,t.x),this.y=ke(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ke(this.x,e,t),this.y=ke(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ke(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ke(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*r+e.x,this.y=s*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};pa.prototype.isVector2=!0;let We=pa;class gi{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,a,o){let c=n[r+0],l=n[r+1],h=n[r+2],p=n[r+3],d=s[a+0],g=s[a+1],v=s[a+2],A=s[a+3];if(p!==A||c!==d||l!==g||h!==v){let m=c*d+l*g+h*v+p*A;m<0&&(d=-d,g=-g,v=-v,A=-A,m=-m);let u=1-o;if(m<.9995){const w=Math.acos(m),U=Math.sin(w);u=Math.sin(u*w)/U,o=Math.sin(o*w)/U,c=c*u+d*o,l=l*u+g*o,h=h*u+v*o,p=p*u+A*o}else{c=c*u+d*o,l=l*u+g*o,h=h*u+v*o,p=p*u+A*o;const w=1/Math.sqrt(c*c+l*l+h*h+p*p);c*=w,l*=w,h*=w,p*=w}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=p}static multiplyQuaternionsFlat(e,t,n,r,s,a){const o=n[r],c=n[r+1],l=n[r+2],h=n[r+3],p=s[a],d=s[a+1],g=s[a+2],v=s[a+3];return e[t]=o*v+h*p+c*g-l*d,e[t+1]=c*v+h*d+l*p-o*g,e[t+2]=l*v+h*g+o*d-c*p,e[t+3]=h*v-o*p-c*d-l*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(r/2),p=o(s/2),d=c(n/2),g=c(r/2),v=c(s/2);switch(a){case"XYZ":this._x=d*h*p+l*g*v,this._y=l*g*p-d*h*v,this._z=l*h*v+d*g*p,this._w=l*h*p-d*g*v;break;case"YXZ":this._x=d*h*p+l*g*v,this._y=l*g*p-d*h*v,this._z=l*h*v-d*g*p,this._w=l*h*p+d*g*v;break;case"ZXY":this._x=d*h*p-l*g*v,this._y=l*g*p+d*h*v,this._z=l*h*v+d*g*p,this._w=l*h*p-d*g*v;break;case"ZYX":this._x=d*h*p-l*g*v,this._y=l*g*p+d*h*v,this._z=l*h*v-d*g*p,this._w=l*h*p+d*g*v;break;case"YZX":this._x=d*h*p+l*g*v,this._y=l*g*p+d*h*v,this._z=l*h*v-d*g*p,this._w=l*h*p-d*g*v;break;case"XZY":this._x=d*h*p-l*g*v,this._y=l*g*p-d*h*v,this._z=l*h*v+d*g*p,this._w=l*h*p+d*g*v;break;default:Pe("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],a=t[1],o=t[5],c=t[9],l=t[2],h=t[6],p=t[10],d=n+o+p;if(d>0){const g=.5/Math.sqrt(d+1);this._w=.25/g,this._x=(h-c)*g,this._y=(s-l)*g,this._z=(a-r)*g}else if(n>o&&n>p){const g=2*Math.sqrt(1+n-o-p);this._w=(h-c)/g,this._x=.25*g,this._y=(r+a)/g,this._z=(s+l)/g}else if(o>p){const g=2*Math.sqrt(1+o-n-p);this._w=(s-l)/g,this._x=(r+a)/g,this._y=.25*g,this._z=(c+h)/g}else{const g=2*Math.sqrt(1+p-n-o);this._w=(a-r)/g,this._x=(s+l)/g,this._y=(c+h)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ke(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,a=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+a*o+r*l-s*c,this._y=r*h+a*c+s*o-n*l,this._z=s*h+a*l+n*c-r*o,this._w=a*h-n*o-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){let n=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,r=-r,s=-s,a=-a,o=-o);let c=1-t;if(o<.9995){const l=Math.acos(o),h=Math.sin(l);c=Math.sin(c*l)/h,t=Math.sin(t*l)/h,this._x=this._x*c+n*t,this._y=this._y*c+r*t,this._z=this._z*c+s*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+r*t,this._z=this._z*c+s*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const ma=class ma{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(La.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(La.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*r-o*n),h=2*(o*t-s*r),p=2*(s*n-a*t);return this.x=t+c*l+a*p-o*h,this.y=n+c*h+o*l-s*p,this.z=r+c*p+s*h-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ke(this.x,e.x,t.x),this.y=ke(this.y,e.y,t.y),this.z=ke(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ke(this.x,e,t),this.y=ke(this.y,e,t),this.z=ke(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ke(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,a=t.x,o=t.y,c=t.z;return this.x=r*c-s*o,this.y=s*a-n*c,this.z=n*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Fr.copy(this).projectOnVector(e),this.sub(Fr)}reflect(e){return this.sub(Fr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(ke(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};ma.prototype.isVector3=!0;let k=ma;const Fr=new k,La=new gi,ga=class ga{constructor(e,t,n,r,s,a,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,c,l)}set(e,t,n,r,s,a,o,c,l){const h=this.elements;return h[0]=e,h[1]=r,h[2]=o,h[3]=t,h[4]=s,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],p=n[7],d=n[2],g=n[5],v=n[8],A=r[0],m=r[3],u=r[6],w=r[1],U=r[4],M=r[7],T=r[2],y=r[5],P=r[8];return s[0]=a*A+o*w+c*T,s[3]=a*m+o*U+c*y,s[6]=a*u+o*M+c*P,s[1]=l*A+h*w+p*T,s[4]=l*m+h*U+p*y,s[7]=l*u+h*M+p*P,s[2]=d*A+g*w+v*T,s[5]=d*m+g*U+v*y,s[8]=d*u+g*M+v*P,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*a*h-t*o*l-n*s*h+n*o*c+r*s*l-r*a*c}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],p=h*a-o*l,d=o*c-h*s,g=l*s-a*c,v=t*p+n*d+r*g;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const A=1/v;return e[0]=p*A,e[1]=(r*l-h*n)*A,e[2]=(o*n-r*a)*A,e[3]=d*A,e[4]=(h*t-r*c)*A,e[5]=(r*s-o*t)*A,e[6]=g*A,e[7]=(n*c-l*t)*A,e[8]=(a*t-n*s)*A,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,a,o){const c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-r*l,r*c,-r*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return hi("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Or.makeScale(e,t)),this}rotate(e){return hi("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Or.makeRotation(-e)),this}translate(e,t){return hi("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Or.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};ga.prototype.isMatrix3=!0;let Ie=ga;const Or=new Ie,Da=new Ie().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ia=new Ie().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function tc(){const i={enabled:!0,workingColorSpace:Er,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===et&&(r.r=vn(r.r),r.g=vn(r.g),r.b=vn(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===et&&(r.r=fi(r.r),r.g=fi(r.g),r.b=fi(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Ln?yr:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return hi("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return hi("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Er]:{primaries:e,whitePoint:n,transfer:yr,toXYZ:Da,fromXYZ:Ia,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:kt},outputColorSpaceConfig:{drawingBufferColorSpace:kt}},[kt]:{primaries:e,whitePoint:n,transfer:et,toXYZ:Da,fromXYZ:Ia,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:kt}}}),i}const Ve=tc();function vn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function fi(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Jn;class nc{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Jn===void 0&&(Jn=br("canvas")),Jn.width=e.width,Jn.height=e.height;const r=Jn.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),n=Jn}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=br("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=vn(s[a]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(vn(t[n]/255)*255):t[n]=vn(t[n]);return{data:t,width:e.width,height:e.height}}else return Pe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let ic=0;class ca{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:ic++}),this.uuid=Oi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Br(r[a].image)):s.push(Br(r[a]))}else s=Br(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function Br(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?nc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Pe("Texture: Unable to serialize Texture."),{})}let rc=0;const zr=new k;class Nt extends qn{constructor(e=Nt.DEFAULT_IMAGE,t=Nt.DEFAULT_MAPPING,n=_n,r=_n,s=Lt,a=Gn,o=Jt,c=Gt,l=Nt.DEFAULT_ANISOTROPY,h=Ln){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:rc++}),this.uuid=Oi(),this.name="",this.source=new ca(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new We(0,0),this.repeat=new We(1,1),this.center=new We(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ie,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(zr).x}get height(){return this.source.getSize(zr).y}get depth(){return this.source.getSize(zr).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){Pe(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Pe(`Texture.setValues(): property '${t}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Bo)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case xs:e.x=e.x-Math.floor(e.x);break;case _n:e.x=e.x<0?0:1;break;case vs:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case xs:e.y=e.y-Math.floor(e.y);break;case _n:e.y=e.y<0?0:1;break;case vs:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Nt.DEFAULT_IMAGE=null;Nt.DEFAULT_MAPPING=Bo;Nt.DEFAULT_ANISOTROPY=1;const _a=class _a{constructor(e=0,t=0,n=0,r=1){this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const c=e.elements,l=c[0],h=c[4],p=c[8],d=c[1],g=c[5],v=c[9],A=c[2],m=c[6],u=c[10];if(Math.abs(h-d)<.01&&Math.abs(p-A)<.01&&Math.abs(v-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(p+A)<.1&&Math.abs(v+m)<.1&&Math.abs(l+g+u-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const U=(l+1)/2,M=(g+1)/2,T=(u+1)/2,y=(h+d)/4,P=(p+A)/4,_=(v+m)/4;return U>M&&U>T?U<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(U),r=y/n,s=P/n):M>T?M<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(M),n=y/r,s=_/r):T<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(T),n=P/s,r=_/s),this.set(n,r,s,t),this}let w=Math.sqrt((m-v)*(m-v)+(p-A)*(p-A)+(d-h)*(d-h));return Math.abs(w)<.001&&(w=1),this.x=(m-v)/w,this.y=(p-A)/w,this.z=(d-h)/w,this.w=Math.acos((l+g+u-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ke(this.x,e.x,t.x),this.y=ke(this.y,e.y,t.y),this.z=ke(this.z,e.z,t.z),this.w=ke(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ke(this.x,e,t),this.y=ke(this.y,e,t),this.z=ke(this.z,e,t),this.w=ke(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(ke(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};_a.prototype.isVector4=!0;let ut=_a;class sc extends qn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Lt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new ut(0,0,e,t),this.scissorTest=!1,this.viewport=new ut(0,0,e,t),this.textures=[];const r={width:e,height:t,depth:n.depth},s=new Nt(r),a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:Lt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const r=Object.assign({},e.textures[t].image);this.textures[t].source=new ca(r)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Qt extends sc{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Yo extends Nt{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=At,this.minFilter=At,this.wrapR=_n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class ac extends Nt{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=At,this.minFilter=At,this.wrapR=_n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const Tr=class Tr{constructor(e,t,n,r,s,a,o,c,l,h,p,d,g,v,A,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,c,l,h,p,d,g,v,A,m)}set(e,t,n,r,s,a,o,c,l,h,p,d,g,v,A,m){const u=this.elements;return u[0]=e,u[4]=t,u[8]=n,u[12]=r,u[1]=s,u[5]=a,u[9]=o,u[13]=c,u[2]=l,u[6]=h,u[10]=p,u[14]=d,u[3]=g,u[7]=v,u[11]=A,u[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Tr().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,n=e.elements,r=1/Qn.setFromMatrixColumn(e,0).length(),s=1/Qn.setFromMatrixColumn(e,1).length(),a=1/Qn.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(r),l=Math.sin(r),h=Math.cos(s),p=Math.sin(s);if(e.order==="XYZ"){const d=a*h,g=a*p,v=o*h,A=o*p;t[0]=c*h,t[4]=-c*p,t[8]=l,t[1]=g+v*l,t[5]=d-A*l,t[9]=-o*c,t[2]=A-d*l,t[6]=v+g*l,t[10]=a*c}else if(e.order==="YXZ"){const d=c*h,g=c*p,v=l*h,A=l*p;t[0]=d+A*o,t[4]=v*o-g,t[8]=a*l,t[1]=a*p,t[5]=a*h,t[9]=-o,t[2]=g*o-v,t[6]=A+d*o,t[10]=a*c}else if(e.order==="ZXY"){const d=c*h,g=c*p,v=l*h,A=l*p;t[0]=d-A*o,t[4]=-a*p,t[8]=v+g*o,t[1]=g+v*o,t[5]=a*h,t[9]=A-d*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const d=a*h,g=a*p,v=o*h,A=o*p;t[0]=c*h,t[4]=v*l-g,t[8]=d*l+A,t[1]=c*p,t[5]=A*l+d,t[9]=g*l-v,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const d=a*c,g=a*l,v=o*c,A=o*l;t[0]=c*h,t[4]=A-d*p,t[8]=v*p+g,t[1]=p,t[5]=a*h,t[9]=-o*h,t[2]=-l*h,t[6]=g*p+v,t[10]=d-A*p}else if(e.order==="XZY"){const d=a*c,g=a*l,v=o*c,A=o*l;t[0]=c*h,t[4]=-p,t[8]=l*h,t[1]=d*p+A,t[5]=a*h,t[9]=g*p-v,t[2]=v*p-g,t[6]=o*h,t[10]=A*p+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(oc,e,lc)}lookAt(e,t,n){const r=this.elements;return Bt.subVectors(e,t),Bt.lengthSq()===0&&(Bt.z=1),Bt.normalize(),Tn.crossVectors(n,Bt),Tn.lengthSq()===0&&(Math.abs(n.z)===1?Bt.x+=1e-4:Bt.z+=1e-4,Bt.normalize(),Tn.crossVectors(n,Bt)),Tn.normalize(),qi.crossVectors(Bt,Tn),r[0]=Tn.x,r[4]=qi.x,r[8]=Bt.x,r[1]=Tn.y,r[5]=qi.y,r[9]=Bt.y,r[2]=Tn.z,r[6]=qi.z,r[10]=Bt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],p=n[5],d=n[9],g=n[13],v=n[2],A=n[6],m=n[10],u=n[14],w=n[3],U=n[7],M=n[11],T=n[15],y=r[0],P=r[4],_=r[8],E=r[12],C=r[1],F=r[5],O=r[9],z=r[13],I=r[2],X=r[6],Q=r[10],Z=r[14],oe=r[3],Y=r[7],te=r[11],ae=r[15];return s[0]=a*y+o*C+c*I+l*oe,s[4]=a*P+o*F+c*X+l*Y,s[8]=a*_+o*O+c*Q+l*te,s[12]=a*E+o*z+c*Z+l*ae,s[1]=h*y+p*C+d*I+g*oe,s[5]=h*P+p*F+d*X+g*Y,s[9]=h*_+p*O+d*Q+g*te,s[13]=h*E+p*z+d*Z+g*ae,s[2]=v*y+A*C+m*I+u*oe,s[6]=v*P+A*F+m*X+u*Y,s[10]=v*_+A*O+m*Q+u*te,s[14]=v*E+A*z+m*Z+u*ae,s[3]=w*y+U*C+M*I+T*oe,s[7]=w*P+U*F+M*X+T*Y,s[11]=w*_+U*O+M*Q+T*te,s[15]=w*E+U*z+M*Z+T*ae,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],a=e[1],o=e[5],c=e[9],l=e[13],h=e[2],p=e[6],d=e[10],g=e[14],v=e[3],A=e[7],m=e[11],u=e[15],w=c*g-l*d,U=o*g-l*p,M=o*d-c*p,T=a*g-l*h,y=a*d-c*h,P=a*p-o*h;return t*(A*w-m*U+u*M)-n*(v*w-m*T+u*y)+r*(v*U-A*T+u*P)-s*(v*M-A*y+m*P)}determinantAffine(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[1],a=e[5],o=e[9],c=e[2],l=e[6],h=e[10];return t*(a*h-o*l)-n*(s*h-o*c)+r*(s*l-a*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],p=e[9],d=e[10],g=e[11],v=e[12],A=e[13],m=e[14],u=e[15],w=t*o-n*a,U=t*c-r*a,M=t*l-s*a,T=n*c-r*o,y=n*l-s*o,P=r*l-s*c,_=h*A-p*v,E=h*m-d*v,C=h*u-g*v,F=p*m-d*A,O=p*u-g*A,z=d*u-g*m,I=w*z-U*O+M*F+T*C-y*E+P*_;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const X=1/I;return e[0]=(o*z-c*O+l*F)*X,e[1]=(r*O-n*z-s*F)*X,e[2]=(A*P-m*y+u*T)*X,e[3]=(d*y-p*P-g*T)*X,e[4]=(c*C-a*z-l*E)*X,e[5]=(t*z-r*C+s*E)*X,e[6]=(m*M-v*P-u*U)*X,e[7]=(h*P-d*M+g*U)*X,e[8]=(a*O-o*C+l*_)*X,e[9]=(n*C-t*O-s*_)*X,e[10]=(v*y-A*M+u*w)*X,e[11]=(p*M-h*y-g*w)*X,e[12]=(o*E-a*F-c*_)*X,e[13]=(t*F-n*E+r*_)*X,e[14]=(A*U-v*T-m*w)*X,e[15]=(h*T-p*U+d*w)*X,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,a=e.x,o=e.y,c=e.z,l=s*a,h=s*o;return this.set(l*a+n,l*o-r*c,l*c+r*o,0,l*o+r*c,h*o+n,h*c-r*a,0,l*c-r*o,h*c+r*a,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,a){return this.set(1,n,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,a=t._y,o=t._z,c=t._w,l=s+s,h=a+a,p=o+o,d=s*l,g=s*h,v=s*p,A=a*h,m=a*p,u=o*p,w=c*l,U=c*h,M=c*p,T=n.x,y=n.y,P=n.z;return r[0]=(1-(A+u))*T,r[1]=(g+M)*T,r[2]=(v-U)*T,r[3]=0,r[4]=(g-M)*y,r[5]=(1-(d+u))*y,r[6]=(m+w)*y,r[7]=0,r[8]=(v+U)*P,r[9]=(m-w)*P,r[10]=(1-(d+A))*P,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinantAffine();if(s===0)return n.set(1,1,1),t.identity(),this;let a=Qn.set(r[0],r[1],r[2]).length();const o=Qn.set(r[4],r[5],r[6]).length(),c=Qn.set(r[8],r[9],r[10]).length();s<0&&(a=-a),Yt.copy(this);const l=1/a,h=1/o,p=1/c;return Yt.elements[0]*=l,Yt.elements[1]*=l,Yt.elements[2]*=l,Yt.elements[4]*=h,Yt.elements[5]*=h,Yt.elements[6]*=h,Yt.elements[8]*=p,Yt.elements[9]*=p,Yt.elements[10]*=p,t.setFromRotationMatrix(Yt),n.x=a,n.y=o,n.z=c,this}makePerspective(e,t,n,r,s,a,o=an,c=!1){const l=this.elements,h=2*s/(t-e),p=2*s/(n-r),d=(t+e)/(t-e),g=(n+r)/(n-r);let v,A;if(c)v=s/(a-s),A=a*s/(a-s);else if(o===an)v=-(a+s)/(a-s),A=-2*a*s/(a-s);else if(o===Ni)v=-a/(a-s),A=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=p,l[9]=g,l[13]=0,l[2]=0,l[6]=0,l[10]=v,l[14]=A,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,s,a,o=an,c=!1){const l=this.elements,h=2/(t-e),p=2/(n-r),d=-(t+e)/(t-e),g=-(n+r)/(n-r);let v,A;if(c)v=1/(a-s),A=a/(a-s);else if(o===an)v=-2/(a-s),A=-(a+s)/(a-s);else if(o===Ni)v=-1/(a-s),A=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=p,l[9]=0,l[13]=g,l[2]=0,l[6]=0,l[10]=v,l[14]=A,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};Tr.prototype.isMatrix4=!0;let pt=Tr;const Qn=new k,Yt=new pt,oc=new k(0,0,0),lc=new k(1,1,1),Tn=new k,qi=new k,Bt=new k,Ua=new pt,Na=new gi;class Dn{constructor(e=0,t=0,n=0,r=Dn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],c=r[1],l=r[5],h=r[9],p=r[2],d=r[6],g=r[10];switch(t){case"XYZ":this._y=Math.asin(ke(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,g),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-ke(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,g),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-p,s),this._z=0);break;case"ZXY":this._x=Math.asin(ke(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-p,g),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-ke(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(d,g),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(ke(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-p,s)):(this._x=0,this._y=Math.atan2(o,g));break;case"XZY":this._z=Math.asin(-ke(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-h,g),this._y=0);break;default:Pe("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Ua.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ua,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Na.setFromEuler(this),this.setFromQuaternion(Na,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Dn.DEFAULT_ORDER="XYZ";class $o{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let cc=0;const Fa=new k,jn=new gi,un=new pt,Yi=new k,Si=new k,dc=new k,uc=new gi,Oa=new k(1,0,0),Ba=new k(0,1,0),za=new k(0,0,1),Ga={type:"added"},hc={type:"removed"},ei={type:"childadded",child:null},Gr={type:"childremoved",child:null};class Dt extends qn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:cc++}),this.uuid=Oi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Dt.DEFAULT_UP.clone();const e=new k,t=new Dn,n=new gi,r=new k(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new pt},normalMatrix:{value:new Ie}}),this.matrix=new pt,this.matrixWorld=new pt,this.matrixAutoUpdate=Dt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new $o,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return jn.setFromAxisAngle(e,t),this.quaternion.multiply(jn),this}rotateOnWorldAxis(e,t){return jn.setFromAxisAngle(e,t),this.quaternion.premultiply(jn),this}rotateX(e){return this.rotateOnAxis(Oa,e)}rotateY(e){return this.rotateOnAxis(Ba,e)}rotateZ(e){return this.rotateOnAxis(za,e)}translateOnAxis(e,t){return Fa.copy(e).applyQuaternion(this.quaternion),this.position.add(Fa.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Oa,e)}translateY(e){return this.translateOnAxis(Ba,e)}translateZ(e){return this.translateOnAxis(za,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(un.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Yi.copy(e):Yi.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Si.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?un.lookAt(Si,Yi,this.up):un.lookAt(Yi,Si,this.up),this.quaternion.setFromRotationMatrix(un),r&&(un.extractRotation(r.matrixWorld),jn.setFromRotationMatrix(un),this.quaternion.premultiply(jn.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ke("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ga),ei.child=e,this.dispatchEvent(ei),ei.child=null):Ke("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(hc),Gr.child=e,this.dispatchEvent(Gr),Gr.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),un.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),un.multiply(e.parent.matrixWorld)),e.applyMatrix4(un),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ga),ei.child=e,this.dispatchEvent(ei),ei.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Si,e,dc),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Si,uc,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,r=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*n-s[8]*r,s[13]+=n-s[1]*t-s[5]*n-s[9]*r,s[14]+=r-s[2]*t-s[6]*n-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){const s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,r.name=this.name,r.castShadow=this.castShadow,r.receiveShadow=this.receiveShadow,r.visible=this.visible,r.frustumCulled=this.frustumCulled,r.renderOrder=this.renderOrder,r.static=this.static,r.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const p=c[l];s(e.shapes,p)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(e.materials,this.material[c]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];r.animations.push(s(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),h=a(e.images),p=a(e.shapes),d=a(e.skeletons),g=a(e.animations),v=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),p.length>0&&(n.shapes=p),d.length>0&&(n.skeletons=d),g.length>0&&(n.animations=g),v.length>0&&(n.nodes=v)}return n.object=r,n;function a(o){const c=[];for(const l in o){const h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Dt.DEFAULT_UP=new k(0,1,0);Dt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Vn extends Dt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const fc={type:"move"};class Hr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Vn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Vn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new k,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new k),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Vn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new k,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new k,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const A of e.hand.values()){const m=t.getJointPose(A,n),u=this._getHandJoint(l,A);m!==null&&(u.matrix.fromArray(m.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=m.radius),u.visible=m!==null}const h=l.joints["index-finger-tip"],p=l.joints["thumb-tip"],d=h.position.distanceTo(p.position),g=.02,v=.005;l.inputState.pinching&&d>g+v?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=g-v&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(fc)))}return o!==null&&(o.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Vn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Ko={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},An={h:0,s:0,l:0},$i={h:0,s:0,l:0};function Vr(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class $e{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=kt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ve.colorSpaceToWorking(this,t),this}setRGB(e,t,n,r=Ve.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ve.colorSpaceToWorking(this,r),this}setHSL(e,t,n,r=Ve.workingColorSpace){if(e=ec(e,1),t=ke(t,0,1),n=ke(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=Vr(a,s,e+1/3),this.g=Vr(a,s,e),this.b=Vr(a,s,e-1/3)}return Ve.colorSpaceToWorking(this,r),this}setStyle(e,t=kt){function n(s){s!==void 0&&parseFloat(s)<1&&Pe("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Pe("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);Pe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=kt){const n=Ko[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Pe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=vn(e.r),this.g=vn(e.g),this.b=vn(e.b),this}copyLinearToSRGB(e){return this.r=fi(e.r),this.g=fi(e.g),this.b=fi(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=kt){return Ve.workingToColorSpace(Pt.copy(this),e),Math.round(ke(Pt.r*255,0,255))*65536+Math.round(ke(Pt.g*255,0,255))*256+Math.round(ke(Pt.b*255,0,255))}getHexString(e=kt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ve.workingColorSpace){Ve.workingToColorSpace(Pt.copy(this),t);const n=Pt.r,r=Pt.g,s=Pt.b,a=Math.max(n,r,s),o=Math.min(n,r,s);let c,l;const h=(o+a)/2;if(o===a)c=0,l=0;else{const p=a-o;switch(l=h<=.5?p/(a+o):p/(2-a-o),a){case n:c=(r-s)/p+(r<s?6:0);break;case r:c=(s-n)/p+2;break;case s:c=(n-r)/p+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=Ve.workingColorSpace){return Ve.workingToColorSpace(Pt.copy(this),t),e.r=Pt.r,e.g=Pt.g,e.b=Pt.b,e}getStyle(e=kt){Ve.workingToColorSpace(Pt.copy(this),e);const t=Pt.r,n=Pt.g,r=Pt.b;return e!==kt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(An),this.setHSL(An.h+e,An.s+t,An.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(An),e.getHSL($i);const n=Nr(An.h,$i.h,t),r=Nr(An.s,$i.s,t),s=Nr(An.l,$i.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Pt=new $e;$e.NAMES=Ko;class pc extends Dt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Dn,this.environmentIntensity=1,this.environmentRotation=new Dn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const $t=new k,hn=new k,kr=new k,fn=new k,ti=new k,ni=new k,Ha=new k,Wr=new k,Xr=new k,qr=new k,Yr=new ut,$r=new ut,Kr=new ut;class Zt{constructor(e=new k,t=new k,n=new k){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),$t.subVectors(e,t),r.cross($t);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){$t.subVectors(r,t),hn.subVectors(n,t),kr.subVectors(e,t);const a=$t.dot($t),o=$t.dot(hn),c=$t.dot(kr),l=hn.dot(hn),h=hn.dot(kr),p=a*l-o*o;if(p===0)return s.set(0,0,0),null;const d=1/p,g=(l*c-o*h)*d,v=(a*h-o*c)*d;return s.set(1-g-v,v,g)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,fn)===null?!1:fn.x>=0&&fn.y>=0&&fn.x+fn.y<=1}static getInterpolation(e,t,n,r,s,a,o,c){return this.getBarycoord(e,t,n,r,fn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,fn.x),c.addScaledVector(a,fn.y),c.addScaledVector(o,fn.z),c)}static getInterpolatedAttribute(e,t,n,r,s,a){return Yr.setScalar(0),$r.setScalar(0),Kr.setScalar(0),Yr.fromBufferAttribute(e,t),$r.fromBufferAttribute(e,n),Kr.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Yr,s.x),a.addScaledVector($r,s.y),a.addScaledVector(Kr,s.z),a}static isFrontFacing(e,t,n,r){return $t.subVectors(n,t),hn.subVectors(e,t),$t.cross(hn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return $t.subVectors(this.c,this.b),hn.subVectors(this.a,this.b),$t.cross(hn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Zt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Zt.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return Zt.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return Zt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Zt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let a,o;ti.subVectors(r,n),ni.subVectors(s,n),Wr.subVectors(e,n);const c=ti.dot(Wr),l=ni.dot(Wr);if(c<=0&&l<=0)return t.copy(n);Xr.subVectors(e,r);const h=ti.dot(Xr),p=ni.dot(Xr);if(h>=0&&p<=h)return t.copy(r);const d=c*p-h*l;if(d<=0&&c>=0&&h<=0)return a=c/(c-h),t.copy(n).addScaledVector(ti,a);qr.subVectors(e,s);const g=ti.dot(qr),v=ni.dot(qr);if(v>=0&&g<=v)return t.copy(s);const A=g*l-c*v;if(A<=0&&l>=0&&v<=0)return o=l/(l-v),t.copy(n).addScaledVector(ni,o);const m=h*v-g*p;if(m<=0&&p-h>=0&&g-v>=0)return Ha.subVectors(s,r),o=(p-h)/(p-h+(g-v)),t.copy(r).addScaledVector(Ha,o);const u=1/(m+A+d);return a=A*u,o=d*u,t.copy(n).addScaledVector(ti,a).addScaledVector(ni,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Bi{constructor(e=new k(1/0,1/0,1/0),t=new k(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Kt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Kt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Kt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Kt):Kt.fromBufferAttribute(s,a),Kt.applyMatrix4(e.matrixWorld),this.expandByPoint(Kt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ki.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ki.copy(n.boundingBox)),Ki.applyMatrix4(e.matrixWorld),this.union(Ki)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Kt),Kt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ei),Zi.subVectors(this.max,Ei),ii.subVectors(e.a,Ei),ri.subVectors(e.b,Ei),si.subVectors(e.c,Ei),wn.subVectors(ri,ii),Rn.subVectors(si,ri),Nn.subVectors(ii,si);let t=[0,-wn.z,wn.y,0,-Rn.z,Rn.y,0,-Nn.z,Nn.y,wn.z,0,-wn.x,Rn.z,0,-Rn.x,Nn.z,0,-Nn.x,-wn.y,wn.x,0,-Rn.y,Rn.x,0,-Nn.y,Nn.x,0];return!Zr(t,ii,ri,si,Zi)||(t=[1,0,0,0,1,0,0,0,1],!Zr(t,ii,ri,si,Zi))?!1:(Ji.crossVectors(wn,Rn),t=[Ji.x,Ji.y,Ji.z],Zr(t,ii,ri,si,Zi))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Kt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Kt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(pn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),pn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),pn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),pn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),pn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),pn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),pn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),pn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(pn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const pn=[new k,new k,new k,new k,new k,new k,new k,new k],Kt=new k,Ki=new Bi,ii=new k,ri=new k,si=new k,wn=new k,Rn=new k,Nn=new k,Ei=new k,Zi=new k,Ji=new k,Fn=new k;function Zr(i,e,t,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){Fn.fromArray(i,s);const o=r.x*Math.abs(Fn.x)+r.y*Math.abs(Fn.y)+r.z*Math.abs(Fn.z),c=e.dot(Fn),l=t.dot(Fn),h=n.dot(Fn);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}const xt=new k,Qi=new We;let mc=0;class Mn extends qn{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:mc++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Kl,this.updateRanges=[],this.gpuType=sn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Qi.fromBufferAttribute(this,t),Qi.applyMatrix3(e),this.setXY(t,Qi.x,Qi.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)xt.fromBufferAttribute(this,t),xt.applyMatrix3(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)xt.fromBufferAttribute(this,t),xt.applyMatrix4(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)xt.fromBufferAttribute(this,t),xt.applyNormalMatrix(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)xt.fromBufferAttribute(this,t),xt.transformDirection(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Mi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ft(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Mi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Mi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Mi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Mi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ft(t,this.array),n=Ft(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Ft(t,this.array),n=Ft(n,this.array),r=Ft(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=Ft(t,this.array),n=Ft(n,this.array),r=Ft(r,this.array),s=Ft(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class Zo extends Mn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Jo extends Mn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class yt extends Mn{constructor(e,t,n){super(new Float32Array(e),t,n)}}const gc=new Bi,yi=new k,Jr=new k;class da{constructor(e=new k,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):gc.setFromPoints(e).getCenter(n);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;yi.subVectors(e,this.center);const t=yi.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(yi,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Jr.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(yi.copy(e.center).add(Jr)),this.expandByPoint(yi.copy(e.center).sub(Jr))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let _c=0;const Vt=new pt,Qr=new Dt,ai=new k,zt=new Bi,bi=new Bi,Et=new k;class Xt extends qn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:_c++}),this.uuid=Oi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Zl(e)?Jo:Zo)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Ie().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Vt.makeRotationFromQuaternion(e),this.applyMatrix4(Vt),this}rotateX(e){return Vt.makeRotationX(e),this.applyMatrix4(Vt),this}rotateY(e){return Vt.makeRotationY(e),this.applyMatrix4(Vt),this}rotateZ(e){return Vt.makeRotationZ(e),this.applyMatrix4(Vt),this}translate(e,t,n){return Vt.makeTranslation(e,t,n),this.applyMatrix4(Vt),this}scale(e,t,n){return Vt.makeScale(e,t,n),this.applyMatrix4(Vt),this}lookAt(e){return Qr.lookAt(e),Qr.updateMatrix(),this.applyMatrix4(Qr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ai).negate(),this.translate(ai.x,ai.y,ai.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new yt(n,3))}else{const n=Math.min(e.length,t.count);for(let r=0;r<n;r++){const s=e[r];t.setXYZ(r,s.x,s.y,s.z||0)}e.length>t.count&&Pe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Bi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ke("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new k(-1/0,-1/0,-1/0),new k(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];zt.setFromBufferAttribute(s),this.morphTargetsRelative?(Et.addVectors(this.boundingBox.min,zt.min),this.boundingBox.expandByPoint(Et),Et.addVectors(this.boundingBox.max,zt.max),this.boundingBox.expandByPoint(Et)):(this.boundingBox.expandByPoint(zt.min),this.boundingBox.expandByPoint(zt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ke('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new da);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ke("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new k,1/0);return}if(e){const n=this.boundingSphere.center;if(zt.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];bi.setFromBufferAttribute(o),this.morphTargetsRelative?(Et.addVectors(zt.min,bi.min),zt.expandByPoint(Et),Et.addVectors(zt.max,bi.max),zt.expandByPoint(Et)):(zt.expandByPoint(bi.min),zt.expandByPoint(bi.max))}zt.getCenter(n);let r=0;for(let s=0,a=e.count;s<a;s++)Et.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(Et));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)Et.fromBufferAttribute(o,l),c&&(ai.fromBufferAttribute(e,l),Et.add(ai)),r=Math.max(r,n.distanceToSquared(Et))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Ke('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ke("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,s=t.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Mn(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));const o=[],c=[];for(let _=0;_<n.count;_++)o[_]=new k,c[_]=new k;const l=new k,h=new k,p=new k,d=new We,g=new We,v=new We,A=new k,m=new k;function u(_,E,C){l.fromBufferAttribute(n,_),h.fromBufferAttribute(n,E),p.fromBufferAttribute(n,C),d.fromBufferAttribute(s,_),g.fromBufferAttribute(s,E),v.fromBufferAttribute(s,C),h.sub(l),p.sub(l),g.sub(d),v.sub(d);const F=1/(g.x*v.y-v.x*g.y);isFinite(F)&&(A.copy(h).multiplyScalar(v.y).addScaledVector(p,-g.y).multiplyScalar(F),m.copy(p).multiplyScalar(g.x).addScaledVector(h,-v.x).multiplyScalar(F),o[_].add(A),o[E].add(A),o[C].add(A),c[_].add(m),c[E].add(m),c[C].add(m))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let _=0,E=w.length;_<E;++_){const C=w[_],F=C.start,O=C.count;for(let z=F,I=F+O;z<I;z+=3)u(e.getX(z+0),e.getX(z+1),e.getX(z+2))}const U=new k,M=new k,T=new k,y=new k;function P(_){T.fromBufferAttribute(r,_),y.copy(T);const E=o[_];U.copy(E),U.sub(T.multiplyScalar(T.dot(E))).normalize(),M.crossVectors(y,E);const F=M.dot(c[_])<0?-1:1;a.setXYZW(_,U.x,U.y,U.z,F)}for(let _=0,E=w.length;_<E;++_){const C=w[_],F=C.start,O=C.count;for(let z=F,I=F+O;z<I;z+=3)P(e.getX(z+0)),P(e.getX(z+1)),P(e.getX(z+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Mn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,g=n.count;d<g;d++)n.setXYZ(d,0,0,0);const r=new k,s=new k,a=new k,o=new k,c=new k,l=new k,h=new k,p=new k;if(e)for(let d=0,g=e.count;d<g;d+=3){const v=e.getX(d+0),A=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(t,v),s.fromBufferAttribute(t,A),a.fromBufferAttribute(t,m),h.subVectors(a,s),p.subVectors(r,s),h.cross(p),o.fromBufferAttribute(n,v),c.fromBufferAttribute(n,A),l.fromBufferAttribute(n,m),o.add(h),c.add(h),l.add(h),n.setXYZ(v,o.x,o.y,o.z),n.setXYZ(A,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,g=t.count;d<g;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,s),p.subVectors(r,s),h.cross(p),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Et.fromBufferAttribute(e,t),Et.normalize(),e.setXYZ(t,Et.x,Et.y,Et.z)}toNonIndexed(){function e(o,c){const l=o.array,h=o.itemSize,p=o.normalized,d=new l.constructor(c.length*h);let g=0,v=0;for(let A=0,m=c.length;A<m;A++){o.isInterleavedBufferAttribute?g=c[A]*o.data.stride+o.offset:g=c[A]*h;for(let u=0;u<h;u++)d[v++]=l[g++]}return new Mn(d,h,p)}if(this.index===null)return Pe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Xt,n=this.index.array,r=this.attributes;for(const o in r){const c=r[o],l=e(c,n);t.setAttribute(o,l)}const s=this.morphAttributes;for(const o in s){const c=[],l=s[o];for(let h=0,p=l.length;h<p;h++){const d=l[h],g=e(d,n);c.push(g)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let p=0,d=l.length;p<d;p++){const g=l[p];h.push(g.toJSON(e.data))}h.length>0&&(r[c]=h,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const r=e.attributes;for(const l in r){const h=r[l];this.setAttribute(l,h.clone(t))}const s=e.morphAttributes;for(const l in s){const h=[],p=s[l];for(let d=0,g=p.length;d<g;d++)h.push(p[d].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,h=a.length;l<h;l++){const p=a[l];this.addGroup(p.start,p.count,p.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const jr=new k,xc=new k,vc=new Ie;class Pn{constructor(e=new k(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=jr.subVectors(n,t).cross(xc.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){const r=e.delta(jr),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(r,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||vc.getNormalMatrix(e),r=this.coplanarPoint(jr).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let Mc=0;class zi extends qn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Mc++}),this.uuid=Oi(),this.name="",this.type="Material",this.blending=Ci,this.side=kn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ro,this.blendDst=Co,this.blendEquation=di,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new $e(0,0,0),this.blendAlpha=0,this.depthFunc=Di,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Vl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ir,this.stencilZFail=Ir,this.stencilZPass=Ir,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){Pe(`Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){Pe(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector2&&n&&n.isVector2||r&&r.isEuler&&n&&n.isEuler||r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const a=[];for(const o in s){const c=s[o];delete c.metadata,a.push(c)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new $e().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Pn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new We().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new We().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const mn=new k,es=new k,ji=new k,er=new k;class Sc{constructor(e=new k,t=new k(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,mn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=mn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(mn.copy(this.origin).addScaledVector(this.direction,t),mn.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){es.copy(e).add(t).multiplyScalar(.5),ji.copy(t).sub(e).normalize(),er.copy(this.origin).sub(es);const s=e.distanceTo(t)*.5,a=-this.direction.dot(ji),o=er.dot(this.direction),c=-er.dot(ji),l=er.lengthSq(),h=Math.abs(1-a*a);let p,d,g,v;if(h>0)if(p=a*c-o,d=a*o-c,v=s*h,p>=0)if(d>=-v)if(d<=v){const A=1/h;p*=A,d*=A,g=p*(p+a*d+2*o)+d*(a*p+d+2*c)+l}else d=s,p=Math.max(0,-(a*d+o)),g=-p*p+d*(d+2*c)+l;else d=-s,p=Math.max(0,-(a*d+o)),g=-p*p+d*(d+2*c)+l;else d<=-v?(p=Math.max(0,-(-a*s+o)),d=p>0?-s:Math.min(Math.max(-s,-c),s),g=-p*p+d*(d+2*c)+l):d<=v?(p=0,d=Math.min(Math.max(-s,-c),s),g=d*(d+2*c)+l):(p=Math.max(0,-(a*s+o)),d=p>0?s:Math.min(Math.max(-s,-c),s),g=-p*p+d*(d+2*c)+l);else d=a>0?-s:s,p=Math.max(0,-(a*d+o)),g=-p*p+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,p),r&&r.copy(es).addScaledVector(ji,d),g}intersectSphere(e,t){if(e.radius<0)return null;mn.subVectors(e.center,this.origin);const n=mn.dot(this.direction),r=mn.dot(mn)-n*n,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,a,o,c;const l=1/this.direction.x,h=1/this.direction.y,p=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,r=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,r=(e.min.x-d.x)*l),h>=0?(s=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),p>=0?(o=(e.min.z-d.z)*p,c=(e.max.z-d.z)*p):(o=(e.max.z-d.z)*p,c=(e.min.z-d.z)*p),n>c||o>r)||((o>n||n!==n)&&(n=o),(c<r||r!==r)&&(r=c),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,mn)!==null}intersectTriangle(e,t,n,r,s){const a=this.origin,o=this.direction,c=o.x,l=o.y,h=o.z,p=e.x-a.x,d=e.y-a.y,g=e.z-a.z,v=t.x-a.x,A=t.y-a.y,m=t.z-a.z,u=n.x-a.x,w=n.y-a.y,U=n.z-a.z,M=Math.abs(c),T=Math.abs(l),y=Math.abs(h);let P,_,E,C,F,O,z,I,X,Q,Z,oe;if(M>=T&&M>=y?(E=c,O=p,X=v,oe=u,c>=0?(P=l,_=h,C=d,F=g,z=A,I=m,Q=w,Z=U):(P=h,_=l,C=g,F=d,z=m,I=A,Q=U,Z=w)):T>=y?(E=l,O=d,X=A,oe=w,l>=0?(P=h,_=c,C=g,F=p,z=m,I=v,Q=U,Z=u):(P=c,_=h,C=p,F=g,z=v,I=m,Q=u,Z=U)):(E=h,O=g,X=m,oe=U,h>=0?(P=c,_=l,C=p,F=d,z=v,I=A,Q=u,Z=w):(P=l,_=c,C=d,F=p,z=A,I=v,Q=w,Z=u)),E===0)return null;const Y=P/E,te=_/E,ae=1/E,Ce=C-Y*O,we=F-te*O,tt=z-Y*X,Ne=I-te*X,qe=Q-Y*oe,$=Z-te*oe,ne=qe*Ne-$*tt,xe=Ce*$-we*qe,Le=tt*we-Ne*Ce;if(r){if(ne<0||xe<0||Le<0)return null}else if((ne<0||xe<0||Le<0)&&(ne>0||xe>0||Le>0))return null;const ve=ne+xe+Le;if(ve===0)return null;const Fe=ae*(ne*O+xe*X+Le*oe);return(ve>0?Fe<0:Fe>0)?null:this.at(Fe/ve,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Qo extends zi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new $e(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Dn,this.combine=Po,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Va=new pt,On=new Sc,tr=new da,ka=new k,nr=new k,ir=new k,rr=new k,ts=new k,sr=new k,Wa=new k,ar=new k;class Tt extends Dt{constructor(e=new Xt,t=new Qo){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){sr.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const h=o[c],p=s[c];h!==0&&(ts.fromBufferAttribute(p,e),a?sr.addScaledVector(ts,h):sr.addScaledVector(ts.sub(t),h))}t.add(sr)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),tr.copy(n.boundingSphere),tr.applyMatrix4(s),On.copy(e.ray).recast(e.near),!(tr.containsPoint(On.origin)===!1&&(On.intersectSphere(tr,ka)===null||On.origin.distanceToSquared(ka)>(e.far-e.near)**2))&&(Va.copy(s).invert(),On.copy(e.ray).applyMatrix4(Va),!(n.boundingBox!==null&&On.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,On)))}_computeIntersections(e,t,n){let r;const s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,h=s.attributes.uv1,p=s.attributes.normal,d=s.groups,g=s.drawRange;if(o!==null)if(Array.isArray(a))for(let v=0,A=d.length;v<A;v++){const m=d[v],u=a[m.materialIndex],w=Math.max(m.start,g.start),U=Math.min(o.count,Math.min(m.start+m.count,g.start+g.count));for(let M=w,T=U;M<T;M+=3){const y=o.getX(M),P=o.getX(M+1),_=o.getX(M+2);r=or(this,u,e,n,l,h,p,y,P,_),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const v=Math.max(0,g.start),A=Math.min(o.count,g.start+g.count);for(let m=v,u=A;m<u;m+=3){const w=o.getX(m),U=o.getX(m+1),M=o.getX(m+2);r=or(this,a,e,n,l,h,p,w,U,M),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(c!==void 0)if(Array.isArray(a))for(let v=0,A=d.length;v<A;v++){const m=d[v],u=a[m.materialIndex],w=Math.max(m.start,g.start),U=Math.min(c.count,Math.min(m.start+m.count,g.start+g.count));for(let M=w,T=U;M<T;M+=3){const y=M,P=M+1,_=M+2;r=or(this,u,e,n,l,h,p,y,P,_),r&&(r.faceIndex=Math.floor(M/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const v=Math.max(0,g.start),A=Math.min(c.count,g.start+g.count);for(let m=v,u=A;m<u;m+=3){const w=m,U=m+1,M=m+2;r=or(this,a,e,n,l,h,p,w,U,M),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function Ec(i,e,t,n,r,s,a,o){let c;if(e.side===Ot?c=n.intersectTriangle(a,s,r,!0,o):c=n.intersectTriangle(r,s,a,e.side===kn,o),c===null)return null;ar.copy(o),ar.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(ar);return l<t.near||l>t.far?null:{distance:l,point:ar.clone(),object:i}}function or(i,e,t,n,r,s,a,o,c,l){i.getVertexPosition(o,nr),i.getVertexPosition(c,ir),i.getVertexPosition(l,rr);const h=Ec(i,e,t,n,nr,ir,rr,Wa);if(h){const p=new k;Zt.getBarycoord(Wa,nr,ir,rr,p),r&&(h.uv=Zt.getInterpolatedAttribute(r,o,c,l,p,new We)),s&&(h.uv1=Zt.getInterpolatedAttribute(s,o,c,l,p,new We)),a&&(h.normal=Zt.getInterpolatedAttribute(a,o,c,l,p,new k),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:c,c:l,normal:new k,materialIndex:0};Zt.getNormal(nr,ir,rr,d.normal),h.face=d,h.barycoord=p}return h}class yc extends Nt{constructor(e=null,t=1,n=1,r,s,a,o,c,l=At,h=At,p,d){super(null,a,o,c,l,h,r,s,p,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Bn=new da,bc=new We(.5,.5),lr=new k;class ua{constructor(e=new Pn,t=new Pn,n=new Pn,r=new Pn,s=new Pn,a=new Pn){this.planes=[e,t,n,r,s,a]}set(e,t,n,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=an,n=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],c=s[2],l=s[3],h=s[4],p=s[5],d=s[6],g=s[7],v=s[8],A=s[9],m=s[10],u=s[11],w=s[12],U=s[13],M=s[14],T=s[15];if(r[0].setComponents(l-a,g-h,u-v,T-w).normalize(),r[1].setComponents(l+a,g+h,u+v,T+w).normalize(),r[2].setComponents(l+o,g+p,u+A,T+U).normalize(),r[3].setComponents(l-o,g-p,u-A,T-U).normalize(),n)r[4].setComponents(c,d,m,M).normalize(),r[5].setComponents(l-c,g-d,u-m,T-M).normalize();else if(r[4].setComponents(l-c,g-d,u-m,T-M).normalize(),t===an)r[5].setComponents(l+c,g+d,u+m,T+M).normalize();else if(t===Ni)r[5].setComponents(c,d,m,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Bn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Bn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Bn)}intersectsSprite(e){Bn.center.set(0,0,0);const t=bc.distanceTo(e.center);return Bn.radius=.7071067811865476+t,Bn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Bn)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(lr.x=r.normal.x>0?e.max.x:e.min.x,lr.y=r.normal.y>0?e.max.y:e.min.y,lr.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(lr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class jo extends Nt{constructor(e=[],t=Wn,n,r,s,a,o,c,l,h){super(e,t,n,r,s,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Fi extends Nt{constructor(e,t,n=ln,r,s,a,o=At,c=At,l,h=Sn,p=1){if(h!==Sn&&h!==Hn)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:p};super(d,r,s,a,o,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ca(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class Tc extends Fi{constructor(e,t=ln,n=Wn,r,s,a=At,o=At,c,l=Sn){const h={width:e,height:e,depth:1},p=[h,h,h,h,h,h];super(e,e,t,n,r,s,a,o,c,l),this.image=p,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class el extends Nt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Gi extends Xt{constructor(e=1,t=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const c=[],l=[],h=[],p=[];let d=0,g=0;v("z","y","x",-1,-1,n,t,e,a,s,0),v("z","y","x",1,-1,n,t,-e,a,s,1),v("x","z","y",1,1,e,n,t,r,a,2),v("x","z","y",1,-1,e,n,-t,r,a,3),v("x","y","z",1,-1,e,t,n,r,s,4),v("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(c),this.setAttribute("position",new yt(l,3)),this.setAttribute("normal",new yt(h,3)),this.setAttribute("uv",new yt(p,2));function v(A,m,u,w,U,M,T,y,P,_,E){const C=M/P,F=T/_,O=M/2,z=T/2,I=y/2,X=P+1,Q=_+1;let Z=0,oe=0;const Y=new k;for(let te=0;te<Q;te++){const ae=te*F-z;for(let Ce=0;Ce<X;Ce++){const we=Ce*C-O;Y[A]=we*w,Y[m]=ae*U,Y[u]=I,l.push(Y.x,Y.y,Y.z),Y[A]=0,Y[m]=0,Y[u]=y>0?1:-1,h.push(Y.x,Y.y,Y.z),p.push(Ce/P),p.push(1-te/_),Z+=1}}for(let te=0;te<_;te++)for(let ae=0;ae<P;ae++){const Ce=d+ae+X*te,we=d+ae+X*(te+1),tt=d+(ae+1)+X*(te+1),Ne=d+(ae+1)+X*te;c.push(Ce,we,Ne),c.push(we,tt,Ne),oe+=6}o.addGroup(g,oe,E),g+=oe,d+=Z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Gi(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Pi extends Xt{constructor(e=1,t=1,n=4,r=8,s=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:r,heightSegments:s},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),r=Math.max(3,Math.floor(r)),s=Math.max(1,Math.floor(s));const a=[],o=[],c=[],l=[],h=t/2,p=Math.PI/2*e,d=t,g=2*p+d,v=n*2+s,A=r+1,m=new k,u=new k;for(let w=0;w<=v;w++){let U=0,M=0,T=0,y=0;if(w<=n){const E=w/n,C=E*Math.PI/2;M=-h-e*Math.cos(C),T=e*Math.sin(C),y=-e*Math.cos(C),U=E*p}else if(w<=n+s){const E=(w-n)/s;M=-h+E*t,T=e,y=0,U=p+E*d}else{const E=(w-n-s)/n,C=E*Math.PI/2;M=h+e*Math.sin(C),T=e*Math.cos(C),y=e*Math.sin(C),U=p+d+E*p}const P=Math.max(0,Math.min(1,U/g));let _=0;w===0?_=.5/r:w===v&&(_=-.5/r);for(let E=0;E<=r;E++){const C=E/r,F=C*Math.PI*2,O=Math.sin(F),z=Math.cos(F);u.x=-T*z,u.y=M,u.z=T*O,o.push(u.x,u.y,u.z),m.set(-T*z,y,T*O),m.normalize(),c.push(m.x,m.y,m.z),l.push(C+_,P)}if(w>0){const E=(w-1)*A;for(let C=0;C<r;C++){const F=E+C,O=E+C+1,z=w*A+C,I=w*A+C+1;a.push(F,O,z),a.push(O,I,z)}}}this.setIndex(a),this.setAttribute("position",new yt(o,3)),this.setAttribute("normal",new yt(c,3)),this.setAttribute("uv",new yt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Pi(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}}class ha extends Xt{constructor(e=1,t=1,n=1,r=32,s=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:c};const l=this;r=Math.floor(r),s=Math.floor(s);const h=[],p=[],d=[],g=[];let v=0;const A=[],m=n/2;let u=0;w(),a===!1&&(e>0&&U(!0),t>0&&U(!1)),this.setIndex(h),this.setAttribute("position",new yt(p,3)),this.setAttribute("normal",new yt(d,3)),this.setAttribute("uv",new yt(g,2));function w(){const M=new k,T=new k;let y=0;const P=(t-e)/n;for(let _=0;_<=s;_++){const E=[],C=_/s,F=C*(t-e)+e;for(let O=0;O<=r;O++){const z=O/r,I=z*c+o,X=Math.sin(I),Q=Math.cos(I);T.x=F*X,T.y=-C*n+m,T.z=F*Q,p.push(T.x,T.y,T.z),M.set(X,P,Q).normalize(),d.push(M.x,M.y,M.z),g.push(z,1-C),E.push(v++)}A.push(E)}for(let _=0;_<r;_++)for(let E=0;E<s;E++){const C=A[E][_],F=A[E+1][_],O=A[E+1][_+1],z=A[E][_+1];(e>0||E!==0)&&(h.push(C,F,z),y+=3),(t>0||E!==s-1)&&(h.push(F,O,z),y+=3)}l.addGroup(u,y,0),u+=y}function U(M){const T=v,y=new We,P=new k;let _=0;const E=M===!0?e:t,C=M===!0?1:-1;for(let O=1;O<=r;O++)p.push(0,m*C,0),d.push(0,C,0),g.push(.5,.5),v++;const F=v;for(let O=0;O<=r;O++){const I=O/r*c+o,X=Math.cos(I),Q=Math.sin(I);P.x=E*Q,P.y=m*C,P.z=E*X,p.push(P.x,P.y,P.z),d.push(0,C,0),y.x=X*.5+.5,y.y=Q*.5*C+.5,g.push(y.x,y.y),v++}for(let O=0;O<r;O++){const z=T+O,I=F+O;M===!0?h.push(I,I+1,z):h.push(I+1,I,z),_+=3}l.addGroup(u,_,M===!0?1:2),u+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ha(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class wr extends Xt{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(n),c=Math.floor(r),l=o+1,h=c+1,p=e/o,d=t/c,g=[],v=[],A=[],m=[];for(let u=0;u<h;u++){const w=u*d-a;for(let U=0;U<l;U++){const M=U*p-s;v.push(M,-w,0),A.push(0,0,1),m.push(U/o),m.push(1-u/c)}}for(let u=0;u<c;u++)for(let w=0;w<o;w++){const U=w+l*u,M=w+l*(u+1),T=w+1+l*(u+1),y=w+1+l*u;g.push(U,M,y),g.push(M,T,y)}this.setIndex(g),this.setAttribute("position",new yt(v,3)),this.setAttribute("normal",new yt(A,3)),this.setAttribute("uv",new yt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wr(e.width,e.height,e.widthSegments,e.heightSegments)}}class Li extends Xt{constructor(e=1,t=32,n=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(a+o,Math.PI);let l=0;const h=[],p=new k,d=new k,g=[],v=[],A=[],m=[];for(let u=0;u<=n;u++){const w=[],U=u/n,M=a+U*o,T=e*Math.cos(M),y=Math.sqrt(e*e-T*T);let P=0;u===0&&a===0?P=.5/t:u===n&&c===Math.PI&&(P=-.5/t);for(let _=0;_<=t;_++){const E=_/t,C=r+E*s;p.x=-y*Math.cos(C),p.y=T,p.z=y*Math.sin(C),v.push(p.x,p.y,p.z),d.copy(p).normalize(),A.push(d.x,d.y,d.z),m.push(E+P,1-U),w.push(l++)}h.push(w)}for(let u=0;u<n;u++)for(let w=0;w<t;w++){const U=h[u][w+1],M=h[u][w],T=h[u+1][w],y=h[u+1][w+1];(u!==0||a>0)&&g.push(U,M,y),(u!==n-1||c<Math.PI)&&g.push(M,T,y)}this.setIndex(g),this.setAttribute("position",new yt(v,3)),this.setAttribute("normal",new yt(A,3)),this.setAttribute("uv",new yt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Li(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function mi(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];if(Xa(r))r.isRenderTargetTexture?(Pe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone();else if(Array.isArray(r))if(Xa(r[0])){const s=[];for(let a=0,o=r.length;a<o;a++)s[a]=r[a].clone();e[t][n]=s}else e[t][n]=r.slice();else e[t][n]=r}}return e}function Ut(i){const e={};for(let t=0;t<i.length;t++){const n=mi(i[t]);for(const r in n)e[r]=n[r]}return e}function Xa(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Ac(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function tl(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ve.workingColorSpace}const wc={clone:mi,merge:Ut};var Rc=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Cc=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class dn extends zi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Rc,this.fragmentShader=Cc,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=mi(e.uniforms),this.uniformsGroups=Ac(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const n in e.uniforms){const r=e.uniforms[n];switch(this.uniforms[n]={},r.type){case"t":this.uniforms[n].value=t[r.value]||null;break;case"c":this.uniforms[n].value=new $e().setHex(r.value);break;case"v2":this.uniforms[n].value=new We().fromArray(r.value);break;case"v3":this.uniforms[n].value=new k().fromArray(r.value);break;case"v4":this.uniforms[n].value=new ut().fromArray(r.value);break;case"m3":this.uniforms[n].value=new Ie().fromArray(r.value);break;case"m4":this.uniforms[n].value=new pt().fromArray(r.value);break;default:this.uniforms[n].value=r.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class Pc extends dn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class ns extends zi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new $e(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new $e(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Zs,this.normalScale=new We(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Dn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Lc extends zi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Gl,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Dc extends zi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class nl extends Dt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new $e(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const is=new pt,qa=new k,Ya=new k;class Ic{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new We(512,512),this.mapType=Gt,this.map=null,this.mapPass=null,this.matrix=new pt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ua,this._frameExtents=new We(1,1),this._viewportCount=1,this._viewports=[new ut(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;qa.setFromMatrixPosition(e.matrixWorld),t.position.copy(qa),Ya.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ya),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,r){is.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(is,e.coordinateSystem,e.reversedDepth);const s=this._frameExtents,a=r?r.z/s.x:1,o=r?r.w/s.y:1,c=r?r.x/s.x:0,l=r?r.y/s.y:0;e.coordinateSystem===Ni||e.reversedDepth?t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,.5,.5,0,0,0,1),t.multiply(is)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const cr=new k,dr=new gi,tn=new k;class il extends Dt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new pt,this.projectionMatrix=new pt,this.projectionMatrixInverse=new pt,this.coordinateSystem=an,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(cr,dr,tn),tn.x===1&&tn.y===1&&tn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(cr,dr,tn.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(cr,dr,tn),tn.x===1&&tn.y===1&&tn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(cr,dr,tn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Cn=new k,$a=new We,Ka=new We;class Wt extends il{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Js*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ur*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Js*2*Math.atan(Math.tan(Ur*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Cn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Cn.x,Cn.y).multiplyScalar(-e/Cn.z),Cn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Cn.x,Cn.y).multiplyScalar(-e/Cn.z)}getViewSize(e,t){return this.getViewBounds(e,$a,Ka),t.subVectors(Ka,$a)}setViewOffset(e,t,n,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ur*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*r/c,t-=a.offsetY*n/l,r*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class fa extends il{constructor(e=-1,t=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Uc extends Ic{constructor(){super(new fa(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Za extends nl{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Dt.DEFAULT_UP),this.updateMatrix(),this.target=new Dt,this.shadow=new Uc}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class Nc extends nl{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const oi=-90,li=1;class Fc extends Dt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Wt(oi,li,e,t);r.layers=this.layers,this.add(r);const s=new Wt(oi,li,e,t);s.layers=this.layers,this.add(s);const a=new Wt(oi,li,e,t);a.layers=this.layers,this.add(a);const o=new Wt(oi,li,e,t);o.layers=this.layers,this.add(o);const c=new Wt(oi,li,e,t);c.layers=this.layers,this.add(c);const l=new Wt(oi,li,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,a,o,c]=t;for(const l of t)this.remove(l);if(e===an)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Ni)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,c,l,h]=this.children,p=e.getRenderTarget(),d=e.getActiveCubeFace(),g=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const A=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,1,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,4,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),n.texture.generateMipmaps=A,e.setRenderTarget(n,5,r),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(p,d,g),e.xr.enabled=v,n.texture.needsPMREMUpdate=!0}}class Oc extends Wt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class Bc{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,Pe("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}const xa=class xa{constructor(e,t,n,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,r){const s=this.elements;return s[0]=e,s[2]=t,s[1]=n,s[3]=r,this}};xa.prototype.isMatrix2=!0;let Ja=xa;function Qa(i,e,t,n){const r=zc(n);switch(t){case ko:return i*e;case Xo:return i*e/r.components*r.byteLength;case ra:return i*e/r.components*r.byteLength;case Xn:return i*e*2/r.components*r.byteLength;case sa:return i*e*2/r.components*r.byteLength;case Wo:return i*e*3/r.components*r.byteLength;case Jt:return i*e*4/r.components*r.byteLength;case aa:return i*e*4/r.components*r.byteLength;case mr:case gr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case _r:case xr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ss:case ys:return Math.max(i,16)*Math.max(e,8)/4;case Ms:case Es:return Math.max(i,8)*Math.max(e,8)/2;case bs:case Ts:case ws:case Rs:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case As:case Mr:case Cs:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ps:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ls:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Ds:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Is:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Us:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Ns:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Fs:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Os:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Bs:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case zs:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Gs:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Hs:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Vs:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case ks:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Ws:case Xs:case qs:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Ys:case $s:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Sr:case Ks:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function zc(i){switch(i){case Gt:case zo:return{byteLength:1,components:1};case Ii:case Go:case cn:return{byteLength:2,components:1};case na:case ia:return{byteLength:2,components:4};case ln:case ta:case sn:return{byteLength:4,components:1};case Ho:case Vo:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ea}}));typeof window<"u"&&(window.__THREE__?Pe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ea);function rl(){let i=null,e=!1,t=null,n=null;function r(s,a){n=i.requestAnimationFrame(r),t(s,a)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function Gc(i){const e=new WeakMap;function t(o,c){const l=o.array,h=o.usage,p=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,h),o.onUploadCallback();let g;if(l instanceof Float32Array)g=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)g=i.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?g=i.HALF_FLOAT:g=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)g=i.SHORT;else if(l instanceof Uint32Array)g=i.UNSIGNED_INT;else if(l instanceof Int32Array)g=i.INT;else if(l instanceof Int8Array)g=i.BYTE;else if(l instanceof Uint8Array)g=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)g=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:g,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:p}}function n(o,c,l){const h=c.array,p=c.updateRanges;if(i.bindBuffer(l,o),p.length===0)i.bufferSubData(l,0,h);else{p.sort((g,v)=>g.start-v.start);let d=0;for(let g=1;g<p.length;g++){const v=p[d],A=p[g];A.start<=v.start+v.count+1?v.count=Math.max(v.count,A.start+A.count-v.start):(++d,p[d]=A)}p.length=d+1;for(let g=0,v=p.length;g<v;g++){const A=p[g];i.bufferSubData(l,A.start*h.BYTES_PER_ELEMENT,h,A.start,A.count)}c.clearUpdateRanges()}c.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(i.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:r,remove:s,update:a}}var Hc=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Vc=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,kc=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Wc=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Xc=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,qc=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Yc=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,$c=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Kc=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Zc=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Jc=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Qc=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,jc=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,ed=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,td=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,nd=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,id=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,rd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,sd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ad=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,od=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,ld=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,cd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,dd=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,ud=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,hd=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,fd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,pd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,md=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,gd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,_d="gl_FragColor = linearToOutputTexel( gl_FragColor );",xd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,vd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Md=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Sd=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Ed=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,yd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,bd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Td=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Ad=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,wd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Rd=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Cd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Pd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ld=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Dd=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Id=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,Ud=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Nd=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Fd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Od=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Bd=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,zd=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Gd=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Hd=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Vd=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,kd=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Wd=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Xd=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qd=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Yd=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,$d=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Kd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Zd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Jd=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Qd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,jd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,eu=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,tu=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,nu=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,iu=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,ru=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,su=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,au=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,ou=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cu=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,du=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,uu=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,hu=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,fu=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,pu=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,mu=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,gu=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,_u=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,xu=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,vu=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Mu=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Su=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Eu=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,yu=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,bu=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Tu=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Au=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,wu=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ru=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Cu=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Pu=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Lu=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Du=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Iu=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Uu=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Nu=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Fu=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Ou=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Bu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,zu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Gu=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Hu=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Vu=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ku=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Wu=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qu=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Yu=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,$u=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Ku=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Zu=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Ju=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Qu=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ju=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,eh=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,th=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,nh=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ih=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,rh=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sh=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,ah=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,oh=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,lh=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,ch=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,dh=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,uh=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,hh=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fh=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ph=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mh=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,gh=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,_h=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,xh=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,vh=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Mh=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Be={alphahash_fragment:Hc,alphahash_pars_fragment:Vc,alphamap_fragment:kc,alphamap_pars_fragment:Wc,alphatest_fragment:Xc,alphatest_pars_fragment:qc,aomap_fragment:Yc,aomap_pars_fragment:$c,batching_pars_vertex:Kc,batching_vertex:Zc,begin_vertex:Jc,beginnormal_vertex:Qc,bsdfs:jc,iridescence_fragment:ed,bumpmap_pars_fragment:td,clipping_planes_fragment:nd,clipping_planes_pars_fragment:id,clipping_planes_pars_vertex:rd,clipping_planes_vertex:sd,color_fragment:ad,color_pars_fragment:od,color_pars_vertex:ld,color_vertex:cd,common:dd,cube_uv_reflection_fragment:ud,defaultnormal_vertex:hd,displacementmap_pars_vertex:fd,displacementmap_vertex:pd,emissivemap_fragment:md,emissivemap_pars_fragment:gd,colorspace_fragment:_d,colorspace_pars_fragment:xd,envmap_fragment:vd,envmap_common_pars_fragment:Md,envmap_pars_fragment:Sd,envmap_pars_vertex:Ed,envmap_physical_pars_fragment:Id,envmap_vertex:yd,fog_vertex:bd,fog_pars_vertex:Td,fog_fragment:Ad,fog_pars_fragment:wd,gradientmap_pars_fragment:Rd,lightmap_pars_fragment:Cd,lights_lambert_fragment:Pd,lights_lambert_pars_fragment:Ld,lights_pars_begin:Dd,lights_toon_fragment:Ud,lights_toon_pars_fragment:Nd,lights_phong_fragment:Fd,lights_phong_pars_fragment:Od,lights_physical_fragment:Bd,lights_physical_pars_fragment:zd,lights_fragment_begin:Gd,lights_fragment_maps:Hd,lights_fragment_end:Vd,lightprobes_pars_fragment:kd,logdepthbuf_fragment:Wd,logdepthbuf_pars_fragment:Xd,logdepthbuf_pars_vertex:qd,logdepthbuf_vertex:Yd,map_fragment:$d,map_pars_fragment:Kd,map_particle_fragment:Zd,map_particle_pars_fragment:Jd,metalnessmap_fragment:Qd,metalnessmap_pars_fragment:jd,morphinstance_vertex:eu,morphcolor_vertex:tu,morphnormal_vertex:nu,morphtarget_pars_vertex:iu,morphtarget_vertex:ru,normal_fragment_begin:su,normal_fragment_maps:au,normal_pars_fragment:ou,normal_pars_vertex:lu,normal_vertex:cu,normalmap_pars_fragment:du,clearcoat_normal_fragment_begin:uu,clearcoat_normal_fragment_maps:hu,clearcoat_pars_fragment:fu,iridescence_pars_fragment:pu,opaque_fragment:mu,packing:gu,premultiplied_alpha_fragment:_u,project_vertex:xu,dithering_fragment:vu,dithering_pars_fragment:Mu,roughnessmap_fragment:Su,roughnessmap_pars_fragment:Eu,shadowmap_pars_fragment:yu,shadowmap_pars_vertex:bu,shadowmap_vertex:Tu,shadowmask_pars_fragment:Au,skinbase_vertex:wu,skinning_pars_vertex:Ru,skinning_vertex:Cu,skinnormal_vertex:Pu,specularmap_fragment:Lu,specularmap_pars_fragment:Du,tonemapping_fragment:Iu,tonemapping_pars_fragment:Uu,transmission_fragment:Nu,transmission_pars_fragment:Fu,uv_pars_fragment:Ou,uv_pars_vertex:Bu,uv_vertex:zu,worldpos_vertex:Gu,background_vert:Hu,background_frag:Vu,backgroundCube_vert:ku,backgroundCube_frag:Wu,cube_vert:Xu,cube_frag:qu,depth_vert:Yu,depth_frag:$u,distance_vert:Ku,distance_frag:Zu,equirect_vert:Ju,equirect_frag:Qu,linedashed_vert:ju,linedashed_frag:eh,meshbasic_vert:th,meshbasic_frag:nh,meshlambert_vert:ih,meshlambert_frag:rh,meshmatcap_vert:sh,meshmatcap_frag:ah,meshnormal_vert:oh,meshnormal_frag:lh,meshphong_vert:ch,meshphong_frag:dh,meshphysical_vert:uh,meshphysical_frag:hh,meshtoon_vert:fh,meshtoon_frag:ph,points_vert:mh,points_frag:gh,shadow_vert:_h,shadow_frag:xh,sprite_vert:vh,sprite_frag:Mh},pe={common:{diffuse:{value:new $e(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ie},alphaMap:{value:null},alphaMapTransform:{value:new Ie},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ie}},envmap:{envMap:{value:null},envMapRotation:{value:new Ie},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ie}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ie}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ie},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ie},normalScale:{value:new We(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ie},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ie}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ie}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ie}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new $e(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new k},probesMax:{value:new k},probesResolution:{value:new k}},points:{diffuse:{value:new $e(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ie},alphaTest:{value:0},uvTransform:{value:new Ie}},sprite:{diffuse:{value:new $e(16777215)},opacity:{value:1},center:{value:new We(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ie},alphaMap:{value:null},alphaMapTransform:{value:new Ie},alphaTest:{value:0}}},rn={basic:{uniforms:Ut([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.fog]),vertexShader:Be.meshbasic_vert,fragmentShader:Be.meshbasic_frag},lambert:{uniforms:Ut([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new $e(0)},envMapIntensity:{value:1}}]),vertexShader:Be.meshlambert_vert,fragmentShader:Be.meshlambert_frag},phong:{uniforms:Ut([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new $e(0)},specular:{value:new $e(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Be.meshphong_vert,fragmentShader:Be.meshphong_frag},standard:{uniforms:Ut([pe.common,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.roughnessmap,pe.metalnessmap,pe.fog,pe.lights,{emissive:{value:new $e(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag},toon:{uniforms:Ut([pe.common,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.gradientmap,pe.fog,pe.lights,{emissive:{value:new $e(0)}}]),vertexShader:Be.meshtoon_vert,fragmentShader:Be.meshtoon_frag},matcap:{uniforms:Ut([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,{matcap:{value:null}}]),vertexShader:Be.meshmatcap_vert,fragmentShader:Be.meshmatcap_frag},points:{uniforms:Ut([pe.points,pe.fog]),vertexShader:Be.points_vert,fragmentShader:Be.points_frag},dashed:{uniforms:Ut([pe.common,pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Be.linedashed_vert,fragmentShader:Be.linedashed_frag},depth:{uniforms:Ut([pe.common,pe.displacementmap]),vertexShader:Be.depth_vert,fragmentShader:Be.depth_frag},normal:{uniforms:Ut([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,{opacity:{value:1}}]),vertexShader:Be.meshnormal_vert,fragmentShader:Be.meshnormal_frag},sprite:{uniforms:Ut([pe.sprite,pe.fog]),vertexShader:Be.sprite_vert,fragmentShader:Be.sprite_frag},background:{uniforms:{uvTransform:{value:new Ie},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Be.background_vert,fragmentShader:Be.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ie}},vertexShader:Be.backgroundCube_vert,fragmentShader:Be.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Be.cube_vert,fragmentShader:Be.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Be.equirect_vert,fragmentShader:Be.equirect_frag},distance:{uniforms:Ut([pe.common,pe.displacementmap,{referencePosition:{value:new k},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Be.distance_vert,fragmentShader:Be.distance_frag},shadow:{uniforms:Ut([pe.lights,pe.fog,{color:{value:new $e(0)},opacity:{value:1}}]),vertexShader:Be.shadow_vert,fragmentShader:Be.shadow_frag}};rn.physical={uniforms:Ut([rn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ie},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ie},clearcoatNormalScale:{value:new We(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ie},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ie},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ie},sheen:{value:0},sheenColor:{value:new $e(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ie},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ie},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ie},transmissionSamplerSize:{value:new We},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ie},attenuationDistance:{value:0},attenuationColor:{value:new $e(0)},specularColor:{value:new $e(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ie},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ie},anisotropyVector:{value:new We},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ie}}]),vertexShader:Be.meshphysical_vert,fragmentShader:Be.meshphysical_frag};const ur={r:0,b:0,g:0},Sh=new pt,sl=new Ie;sl.set(-1,0,0,0,1,0,0,0,1);function Eh(i,e,t,n,r,s){const a=new $e(0);let o=r===!0?0:1,c,l,h=null,p=0,d=null;function g(w){let U=w.isScene===!0?w.background:null;if(U&&U.isTexture){const M=w.backgroundBlurriness>0;U=e.get(U,M)}return U}function v(w){let U=!1;const M=g(w);M===null?m(a,o):M&&M.isColor&&(m(M,1),U=!0);const T=i.xr.getEnvironmentBlendMode();T==="additive"?t.buffers.color.setClear(0,0,0,1,s):T==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(i.autoClear||U)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function A(w,U){const M=g(U);M&&(M.isCubeTexture||M.mapping===Ar)?(l===void 0&&(l=new Tt(new Gi(1,1,1),new dn({name:"BackgroundCubeMaterial",uniforms:mi(rn.backgroundCube.uniforms),vertexShader:rn.backgroundCube.vertexShader,fragmentShader:rn.backgroundCube.fragmentShader,side:Ot,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(T,y,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=M,l.material.uniforms.backgroundBlurriness.value=U.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Sh.makeRotationFromEuler(U.backgroundRotation)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(sl),l.material.toneMapped=Ve.getTransfer(M.colorSpace)!==et,(h!==M||p!==M.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,h=M,p=M.version,d=i.toneMapping),l.layers.enableAll(),w.unshift(l,l.geometry,l.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new Tt(new wr(2,2),new dn({name:"BackgroundMaterial",uniforms:mi(rn.background.uniforms),vertexShader:rn.background.vertexShader,fragmentShader:rn.background.fragmentShader,side:kn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,c.material.toneMapped=Ve.getTransfer(M.colorSpace)!==et,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(h!==M||p!==M.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,h=M,p=M.version,d=i.toneMapping),c.layers.enableAll(),w.unshift(c,c.geometry,c.material,0,0,null))}function m(w,U){w.getRGB(ur,tl(i)),t.buffers.color.setClear(ur.r,ur.g,ur.b,U,s)}function u(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(w,U=1){a.set(w),o=U,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(w){o=w,m(a,o)},render:v,addToRenderList:A,dispose:u}}function yh(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=d(null);let s=r,a=!1;function o(F,O,z,I,X){let Q=!1;const Z=p(F,I,z,O);s!==Z&&(s=Z,l(s.object)),Q=g(F,I,z,X),Q&&v(F,I,z,X),X!==null&&e.update(X,i.ELEMENT_ARRAY_BUFFER),(Q||a)&&(a=!1,M(F,O,z,I),X!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function c(){return i.createVertexArray()}function l(F){return i.bindVertexArray(F)}function h(F){return i.deleteVertexArray(F)}function p(F,O,z,I){const X=I.wireframe===!0;let Q=n[O.id];Q===void 0&&(Q={},n[O.id]=Q);const Z=F.isInstancedMesh===!0?F.id:0;let oe=Q[Z];oe===void 0&&(oe={},Q[Z]=oe);let Y=oe[z.id];Y===void 0&&(Y={},oe[z.id]=Y);let te=Y[X];return te===void 0&&(te=d(c()),Y[X]=te),te}function d(F){const O=[],z=[],I=[];for(let X=0;X<t;X++)O[X]=0,z[X]=0,I[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:z,attributeDivisors:I,object:F,attributes:{},index:null}}function g(F,O,z,I){const X=s.attributes,Q=O.attributes;let Z=0;const oe=z.getAttributes();for(const Y in oe)if(oe[Y].location>=0){const ae=X[Y];let Ce=Q[Y];if(Ce===void 0&&(Y==="instanceMatrix"&&F.instanceMatrix&&(Ce=F.instanceMatrix),Y==="instanceColor"&&F.instanceColor&&(Ce=F.instanceColor)),ae===void 0||ae.attribute!==Ce||Ce&&ae.data!==Ce.data)return!0;Z++}return s.attributesNum!==Z||s.index!==I}function v(F,O,z,I){const X={},Q=O.attributes;let Z=0;const oe=z.getAttributes();for(const Y in oe)if(oe[Y].location>=0){let ae=Q[Y];ae===void 0&&(Y==="instanceMatrix"&&F.instanceMatrix&&(ae=F.instanceMatrix),Y==="instanceColor"&&F.instanceColor&&(ae=F.instanceColor));const Ce={};Ce.attribute=ae,ae&&ae.data&&(Ce.data=ae.data),X[Y]=Ce,Z++}s.attributes=X,s.attributesNum=Z,s.index=I}function A(){const F=s.newAttributes;for(let O=0,z=F.length;O<z;O++)F[O]=0}function m(F){u(F,0)}function u(F,O){const z=s.newAttributes,I=s.enabledAttributes,X=s.attributeDivisors;z[F]=1,I[F]===0&&(i.enableVertexAttribArray(F),I[F]=1),X[F]!==O&&(i.vertexAttribDivisor(F,O),X[F]=O)}function w(){const F=s.newAttributes,O=s.enabledAttributes;for(let z=0,I=O.length;z<I;z++)O[z]!==F[z]&&(i.disableVertexAttribArray(z),O[z]=0)}function U(F,O,z,I,X,Q,Z){Z===!0?i.vertexAttribIPointer(F,O,z,X,Q):i.vertexAttribPointer(F,O,z,I,X,Q)}function M(F,O,z,I){A();const X=I.attributes,Q=z.getAttributes(),Z=O.defaultAttributeValues;for(const oe in Q){const Y=Q[oe];if(Y.location>=0){let te=X[oe];if(te===void 0&&(oe==="instanceMatrix"&&F.instanceMatrix&&(te=F.instanceMatrix),oe==="instanceColor"&&F.instanceColor&&(te=F.instanceColor)),te!==void 0){const ae=te.normalized,Ce=te.itemSize,we=e.get(te);if(we===void 0)continue;const tt=we.buffer,Ne=we.type,qe=we.bytesPerElement,$=Ne===i.INT||Ne===i.UNSIGNED_INT||te.gpuType===ta;if(te.isInterleavedBufferAttribute){const ne=te.data,xe=ne.stride,Le=te.offset;if(ne.isInstancedInterleavedBuffer){for(let ve=0;ve<Y.locationSize;ve++)u(Y.location+ve,ne.meshPerAttribute);F.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let ve=0;ve<Y.locationSize;ve++)m(Y.location+ve);i.bindBuffer(i.ARRAY_BUFFER,tt);for(let ve=0;ve<Y.locationSize;ve++)U(Y.location+ve,Ce/Y.locationSize,Ne,ae,xe*qe,(Le+Ce/Y.locationSize*ve)*qe,$)}else{if(te.isInstancedBufferAttribute){for(let ne=0;ne<Y.locationSize;ne++)u(Y.location+ne,te.meshPerAttribute);F.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let ne=0;ne<Y.locationSize;ne++)m(Y.location+ne);i.bindBuffer(i.ARRAY_BUFFER,tt);for(let ne=0;ne<Y.locationSize;ne++)U(Y.location+ne,Ce/Y.locationSize,Ne,ae,Ce*qe,Ce/Y.locationSize*ne*qe,$)}}else if(Z!==void 0){const ae=Z[oe];if(ae!==void 0)switch(ae.length){case 2:i.vertexAttrib2fv(Y.location,ae);break;case 3:i.vertexAttrib3fv(Y.location,ae);break;case 4:i.vertexAttrib4fv(Y.location,ae);break;default:i.vertexAttrib1fv(Y.location,ae)}}}}w()}function T(){E();for(const F in n){const O=n[F];for(const z in O){const I=O[z];for(const X in I){const Q=I[X];for(const Z in Q)h(Q[Z].object),delete Q[Z];delete I[X]}}delete n[F]}}function y(F){if(n[F.id]===void 0)return;const O=n[F.id];for(const z in O){const I=O[z];for(const X in I){const Q=I[X];for(const Z in Q)h(Q[Z].object),delete Q[Z];delete I[X]}}delete n[F.id]}function P(F){for(const O in n){const z=n[O];for(const I in z){const X=z[I];if(X[F.id]===void 0)continue;const Q=X[F.id];for(const Z in Q)h(Q[Z].object),delete Q[Z];delete X[F.id]}}}function _(F){for(const O in n){const z=n[O],I=F.isInstancedMesh===!0?F.id:0,X=z[I];if(X!==void 0){for(const Q in X){const Z=X[Q];for(const oe in Z)h(Z[oe].object),delete Z[oe];delete X[Q]}delete z[I],Object.keys(z).length===0&&delete n[O]}}}function E(){C(),a=!0,s!==r&&(s=r,l(s.object))}function C(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:E,resetDefaultState:C,dispose:T,releaseStatesOfGeometry:y,releaseStatesOfObject:_,releaseStatesOfProgram:P,initAttributes:A,enableAttribute:m,disableUnusedAttributes:w}}function bh(i,e,t){let n;function r(c){n=c}function s(c,l){i.drawArrays(n,c,l),t.update(l,n,1)}function a(c,l,h){h!==0&&(i.drawArraysInstanced(n,c,l,h),t.update(l,n,h))}function o(c,l,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,h);let d=0;for(let g=0;g<h;g++)d+=l[g];t.update(d,n,1)}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function Th(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(P){return!(P!==Jt&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(P){const _=P===cn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==Gt&&P!==sn&&!_&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function c(P){if(P==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const h=c(l);h!==l&&(Pe("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const p=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&d===!1&&Pe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const g=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),A=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),u=i.getParameter(i.MAX_VERTEX_ATTRIBS),w=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),U=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),T=i.getParameter(i.MAX_SAMPLES),y=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:p,reversedDepthBuffer:d,maxTextures:g,maxVertexTextures:v,maxTextureSize:A,maxCubemapSize:m,maxAttributes:u,maxVertexUniforms:w,maxVaryings:U,maxFragmentUniforms:M,maxSamples:T,samples:y}}function Ah(i){const e=this;let t=null,n=0,r=!1,s=!1;const a=new Pn,o=new Ie,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(p,d){const g=p.length!==0||d||n!==0||r;return r=d,n=p.length,g},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(p,d){t=h(p,d,0)},this.setState=function(p,d,g){const v=p.clippingPlanes,A=p.clipIntersection,m=p.clipShadows,u=i.get(p);if(!r||v===null||v.length===0||s&&!m)s?h(null):l();else{const w=s?0:n,U=w*4;let M=u.clippingState||null;c.value=M,M=h(v,d,U,g);for(let T=0;T!==U;++T)M[T]=t[T];u.clippingState=M,this.numIntersection=A?this.numPlanes:0,this.numPlanes+=w}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(p,d,g,v){const A=p!==null?p.length:0;let m=null;if(A!==0){if(m=c.value,v!==!0||m===null){const u=g+A*4,w=d.matrixWorldInverse;o.getNormalMatrix(w),(m===null||m.length<u)&&(m=new Float32Array(u));for(let U=0,M=g;U!==A;++U,M+=4)a.copy(p[U]).applyMatrix4(w,o),a.normal.toArray(m,M),m[M+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=A,e.numIntersection=0,m}}const ui=4,wh=6,Rh=20,Ch=256,Ti=new fa,ja=new $e;let rs=null,ss=0,as=0,os=!1;const Ph=new k,zn=new k;class eo{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,r=100,s={}){const{size:a=256,position:o=Ph}=s;rs=this._renderer.getRenderTarget(),ss=this._renderer.getActiveCubeFace(),as=this._renderer.getActiveMipmapLevel(),os=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,r,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=io(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=no(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(rs,ss,as),this._renderer.xr.enabled=os,e.scissorTest=!1,ci(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Wn||e.mapping===pi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),rs=this._renderer.getRenderTarget(),ss=this._renderer.getActiveCubeFace(),as=this._renderer.getActiveMipmapLevel(),os=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Lt,minFilter:Lt,generateMipmaps:!1,type:cn,format:Jt,colorSpace:Er,depthBuffer:!1},r=to(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=to(e,t,n);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Lh(s)),this._blurMaterial=Ih(s,e,t),this._ggxMaterial=Dh(s,e,t)}return r}_compileMaterial(e){const t=new Tt(new Xt,e);this._renderer.compile(t,Ti)}_sceneToCubeUV(e,t,n,r,s){const c=new Wt(90,1,t,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],p=this._renderer,d=p.autoClear,g=p.toneMapping;p.getClearColor(ja),p.toneMapping=on,p.autoClear=!1,p.state.buffers.depth.getReversed()&&(p.setRenderTarget(r),p.clearDepth(),p.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Tt(new Gi,new Qo({name:"PMREM.Background",side:Ot,depthWrite:!1,depthTest:!1})));const A=this._backgroundBox,m=A.material;let u=!1;const w=e.background;w?w.isColor&&(m.color.copy(w),e.background=null,u=!0):(m.color.copy(ja),u=!0);for(let U=0;U<6;U++){const M=U%3;M===0?(c.up.set(0,l[U],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+h[U],s.y,s.z)):M===1?(c.up.set(0,0,l[U]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+h[U],s.z)):(c.up.set(0,l[U],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+h[U]));const T=this._cubeSize;ci(r,M*T,U>2?T:0,T,T),p.setRenderTarget(r),u&&p.render(A,c),p.render(e,c)}p.toneMapping=g,p.autoClear=d,e.background=w}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===Wn||e.mapping===pi;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=io()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=no());const s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=e;const c=this._cubeSize;ci(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,Ti)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=n}_applyGGXFilter(e,t,n){const r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const c=a.uniforms,l=n/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),p=Math.sqrt(l*l-h*h),d=l*1.25,g=p*d,{_lodMax:v}=this,A=this._sizeLods[n],m=3*A*(n>v-ui?n-v+ui:0),u=4*(this._cubeSize-A);c.envMap.value=e.texture,c.roughness.value=g,c.mipInt.value=v-t,ci(s,m,u,3*A,2*A),r.setRenderTarget(s),r.render(o,Ti),c.envMap.value=s.texture,c.roughness.value=0,c.mipInt.value=v-n,ci(e,m,u,3*A,2*A),r.setRenderTarget(e),r.render(o,Ti)}_blur(e,t,n,r){const s=this._pingPongRenderTarget,a=Math.min(r,Math.PI)/Math.SQRT2;this._blurPass(e,s,t,n,a),this._blurPass(s,e,n,n,a)}_blurPass(e,t,n,r,s){const a=this._renderer,o=this._blurMaterial,c=this._lodMeshes[r];c.material=o;const l=o.uniforms;l.envMap.value=e.texture,l.sigma.value=s,l.mipInt.value=this._lodMax-n;const h=this._sizeLods[r],p=3*h*(r>this._lodMax-ui?r-this._lodMax+ui:0),d=4*(this._cubeSize-h);ci(t,p,d,3*h,2*h),a.setRenderTarget(t),a.render(c,Ti)}}function Lh(i){const e=[],t=[];let n=i;const r=i-ui+1+wh;for(let s=0;s<r;s++){const a=Math.pow(2,n);e.push(a);const o=1/(a-2),c=-o,l=1+o,h=[c,c,l,c,l,l,c,c,l,l,c,l],p=6,d=6,g=3,v=new Float32Array(g*d*p),A=new Float32Array(g*d*p);for(let u=0;u<p;u++){const w=u%3*2/3-1,U=u>2?0:-1,M=[w,U,0,w+2/3,U,0,w+2/3,U+1,0,w,U,0,w+2/3,U+1,0,w,U+1,0];v.set(M,g*d*u);for(let T=0;T<d;T++){const y=h[T*2]*2-1,P=h[T*2+1]*2-1;u===0?zn.set(1,P,y):u===1?zn.set(-y,1,-P):u===2?zn.set(-y,P,1):u===3?zn.set(-1,P,-y):u===4?zn.set(-y,-1,P):zn.set(y,P,-1),zn.toArray(A,(u*d+T)*g)}}const m=new Xt;m.setAttribute("position",new Mn(v,g)),m.setAttribute("outputDirection",new Mn(A,g)),t.push(new Tt(m,null)),n>ui&&n--}return{lodMeshes:t,sizeLods:e}}function to(i,e,t){const n=new Qt(i,e,t);return n.texture.mapping=Ar,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ci(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function Dh(i,e,t){return new dn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Ch,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Rr(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:xn,depthTest:!1,depthWrite:!1})}function Ih(i,e,t){return new dn({name:"SphericalGaussianBlur",defines:{SAMPLES:Rh,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Rr(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:xn,depthTest:!1,depthWrite:!1})}function no(){return new dn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Rr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:xn,depthTest:!1,depthWrite:!1})}function io(){return new dn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Rr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:xn,depthTest:!1,depthWrite:!1})}function Rr(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class al extends Qt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new jo(r),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Gi(5,5,5),s=new dn({name:"CubemapFromEquirect",uniforms:mi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ot,blending:xn});s.uniforms.tEquirect.value=t;const a=new Tt(r,s),o=t.minFilter;return t.minFilter===Gn&&(t.minFilter=Lt),new Fc(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,r);e.setRenderTarget(s)}}function Uh(i){let e=new WeakMap,t=new WeakMap,n=null;function r(d,g=!1){return d==null?null:g?a(d):s(d)}function s(d){if(d&&d.isTexture){const g=d.mapping;if(g===Pr||g===Lr)if(e.has(d)){const v=e.get(d).texture;return o(v,d.mapping)}else{const v=d.image;if(v&&v.height>0){const A=new al(v.height);return A.fromEquirectangularTexture(i,d),e.set(d,A),d.addEventListener("dispose",l),o(A.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture){const g=d.mapping,v=g===Pr||g===Lr,A=g===Wn||g===pi;if(v||A){let m=t.get(d);const u=m!==void 0?m.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==u)return n===null&&(n=new eo(i)),m=v?n.fromEquirectangular(d,m):n.fromCubemap(d,m),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),m.texture;if(m!==void 0)return m.texture;{const w=d.image;return v&&w&&w.height>0||A&&w&&c(w)?(n===null&&(n=new eo(i)),m=v?n.fromEquirectangular(d):n.fromCubemap(d),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),d.addEventListener("dispose",h),m.texture):null}}}return d}function o(d,g){return g===Pr?d.mapping=Wn:g===Lr&&(d.mapping=pi),d}function c(d){let g=0;const v=6;for(let A=0;A<v;A++)d[A]!==void 0&&g++;return g===v}function l(d){const g=d.target;g.removeEventListener("dispose",l);const v=e.get(g);v!==void 0&&(e.delete(g),v.dispose())}function h(d){const g=d.target;g.removeEventListener("dispose",h);const v=t.get(g);v!==void 0&&(t.delete(g),v.dispose())}function p(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:r,dispose:p}}function Nh(i){const e={};function t(n){if(e[n]!==void 0)return e[n];const r=i.getExtension(n);return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&hi("WebGLRenderer: "+n+" extension not supported."),r}}}function Fh(i,e,t,n){const r={},s=new WeakMap;function a(p){const d=p.target;d.index!==null&&e.remove(d.index);for(const v in d.attributes)e.remove(d.attributes[v]);d.removeEventListener("dispose",a),delete r[d.id];const g=s.get(d);g&&(e.remove(g),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(p,d){return r[d.id]===!0||(d.addEventListener("dispose",a),r[d.id]=!0,t.memory.geometries++),d}function c(p){const d=p.attributes;for(const g in d)e.update(d[g],i.ARRAY_BUFFER)}function l(p){const d=[],g=p.index,v=p.attributes.position;let A=0;if(v===void 0)return;if(g!==null){const w=g.array;A=g.version;for(let U=0,M=w.length;U<M;U+=3){const T=w[U+0],y=w[U+1],P=w[U+2];d.push(T,y,y,P,P,T)}}else{const w=v.array;A=v.version;for(let U=0,M=w.length/3-1;U<M;U+=3){const T=U+0,y=U+1,P=U+2;d.push(T,y,y,P,P,T)}}const m=new(v.count>=65535?Jo:Zo)(d,1);m.version=A;const u=s.get(p);u&&e.remove(u),s.set(p,m)}function h(p){const d=s.get(p);if(d){const g=p.index;g!==null&&d.version<g.version&&l(p)}else l(p);return s.get(p)}return{get:o,update:c,getWireframeAttribute:h}}function Oh(i,e,t){let n;function r(p){n=p}let s,a;function o(p){s=p.type,a=p.bytesPerElement}function c(p,d){i.drawElements(n,d,s,p*a),t.update(d,n,1)}function l(p,d,g){g!==0&&(i.drawElementsInstanced(n,d,s,p*a,g),t.update(d,n,g))}function h(p,d,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,s,p,0,g);let A=0;for(let m=0;m<g;m++)A+=d[m];t.update(A,n,1)}this.setMode=r,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h}function Bh(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(s/3);break;case i.LINES:t.lines+=o*(s/2);break;case i.LINE_STRIP:t.lines+=o*(s-1);break;case i.LINE_LOOP:t.lines+=o*s;break;case i.POINTS:t.points+=o*s;break;default:Ke("WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function zh(i,e,t){const n=new WeakMap,r=new ut;function s(a,o,c){const l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,p=h!==void 0?h.length:0;let d=n.get(o);if(d===void 0||d.count!==p){let E=function(){P.dispose(),n.delete(o),o.removeEventListener("dispose",E)};d!==void 0&&d.texture.dispose();const g=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,A=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],u=o.morphAttributes.normal||[],w=o.morphAttributes.color||[];let U=0;g===!0&&(U=1),v===!0&&(U=2),A===!0&&(U=3);let M=o.attributes.position.count*U,T=1;M>e.maxTextureSize&&(T=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);const y=new Float32Array(M*T*4*p),P=new Yo(y,M,T,p);P.type=sn,P.needsUpdate=!0;const _=U*4;for(let C=0;C<p;C++){const F=m[C],O=u[C],z=w[C],I=M*T*4*C;for(let X=0;X<F.count;X++){const Q=X*_;g===!0&&(r.fromBufferAttribute(F,X),y[I+Q+0]=r.x,y[I+Q+1]=r.y,y[I+Q+2]=r.z,y[I+Q+3]=0),v===!0&&(r.fromBufferAttribute(O,X),y[I+Q+4]=r.x,y[I+Q+5]=r.y,y[I+Q+6]=r.z,y[I+Q+7]=0),A===!0&&(r.fromBufferAttribute(z,X),y[I+Q+8]=r.x,y[I+Q+9]=r.y,y[I+Q+10]=r.z,y[I+Q+11]=z.itemSize===4?r.w:1)}}d={count:p,texture:P,size:new We(M,T)},n.set(o,d),o.addEventListener("dispose",E)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let g=0;for(let A=0;A<l.length;A++)g+=l[A];const v=o.morphTargetsRelative?1:1-g;c.getUniforms().setValue(i,"morphTargetBaseInfluence",v),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:s}}function Gh(i,e,t,n,r){let s=new WeakMap;function a(l){const h=r.render.frame,p=l.geometry,d=e.get(l,p);if(s.get(d)!==h&&(e.update(d),s.set(d,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),s.get(l)!==h&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,h))),l.isSkinnedMesh){const g=l.skeleton;s.get(g)!==h&&(g.update(),s.set(g,h))}return d}function o(){s=new WeakMap}function c(l){const h=l.target;h.removeEventListener("dispose",c),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:o}}const Hh={[Lo]:"LINEAR_TONE_MAPPING",[Do]:"REINHARD_TONE_MAPPING",[Io]:"CINEON_TONE_MAPPING",[Uo]:"ACES_FILMIC_TONE_MAPPING",[Fo]:"AGX_TONE_MAPPING",[Oo]:"NEUTRAL_TONE_MAPPING",[No]:"CUSTOM_TONE_MAPPING"};function Vh(i,e,t,n,r,s){const a=new Qt(e,t,{type:i,depthBuffer:r,stencilBuffer:s,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,c=null;const l=new Xt;l.setAttribute("position",new yt([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new yt([0,2,0,0,2,0],2));const h=new Pc({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),p=new Tt(l,h),d=new fa(-1,1,1,-1,0,1);let g=null,v=null,A=!1,m,u=null,w=[],U=!1;this.setSize=function(M,T){a.setSize(M,T),o!==null&&o.setSize(M,T),c!==null&&c.setSize(M,T);for(let y=0;y<w.length;y++){const P=w[y];P.setSize&&P.setSize(M,T)}},this.setEffects=function(M){w=M,U=w.length>0&&w[0].isRenderPass===!0;const T=a.width,y=a.height;w.length>0&&o===null&&(o=new Qt(T,y,{type:cn,depthBuffer:!1,stencilBuffer:!1}),c=new Qt(T,y,{type:cn,depthBuffer:!1,stencilBuffer:!1}));for(let P=0;P<w.length;P++){const _=w[P];_.setSize&&_.setSize(T,y)}},this.begin=function(M,T){if(A||M.toneMapping===on&&w.length===0)return!1;if(u=T,T!==null){const y=T.width,P=T.height;(a.width!==y||a.height!==P)&&this.setSize(y,P)}return U===!1&&M.setRenderTarget(a),m=M.toneMapping,M.toneMapping=on,!0},this.hasRenderPass=function(){return U},this.end=function(M,T){M.toneMapping=m,A=!0;let y=a,P=o;for(let _=0;_<w.length;_++){const E=w[_];E.enabled!==!1&&(E.render(M,P,y,T),E.needsSwap!==!1&&(y=P,P=P===o?c:o))}if(g!==M.outputColorSpace||v!==M.toneMapping){g=M.outputColorSpace,v=M.toneMapping,h.defines={},Ve.getTransfer(g)===et&&(h.defines.SRGB_TRANSFER="");const _=Hh[v];_&&(h.defines[_]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=y.texture,M.setRenderTarget(u),M.render(p,d),u=null,A=!1},this.isCompositing=function(){return A},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),l.dispose(),h.dispose()}}const ol=new Nt,Qs=new Fi(1,1),ll=new Yo,cl=new ac,dl=new jo,ro=[],so=[],ao=new Float32Array(16),oo=new Float32Array(9),lo=new Float32Array(4);function _i(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=ro[r];if(s===void 0&&(s=new Float32Array(r),ro[r]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(s,o)}return s}function vt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Mt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Cr(i,e){let t=so[e];t===void 0&&(t=new Int32Array(e),so[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function kh(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Wh(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vt(t,e))return;i.uniform2fv(this.addr,e),Mt(t,e)}}function Xh(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(vt(t,e))return;i.uniform3fv(this.addr,e),Mt(t,e)}}function qh(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vt(t,e))return;i.uniform4fv(this.addr,e),Mt(t,e)}}function Yh(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(vt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Mt(t,e)}else{if(vt(t,n))return;lo.set(n),i.uniformMatrix2fv(this.addr,!1,lo),Mt(t,n)}}function $h(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(vt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Mt(t,e)}else{if(vt(t,n))return;oo.set(n),i.uniformMatrix3fv(this.addr,!1,oo),Mt(t,n)}}function Kh(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(vt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Mt(t,e)}else{if(vt(t,n))return;ao.set(n),i.uniformMatrix4fv(this.addr,!1,ao),Mt(t,n)}}function Zh(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Jh(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vt(t,e))return;i.uniform2iv(this.addr,e),Mt(t,e)}}function Qh(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(vt(t,e))return;i.uniform3iv(this.addr,e),Mt(t,e)}}function jh(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vt(t,e))return;i.uniform4iv(this.addr,e),Mt(t,e)}}function ef(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function tf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vt(t,e))return;i.uniform2uiv(this.addr,e),Mt(t,e)}}function nf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(vt(t,e))return;i.uniform3uiv(this.addr,e),Mt(t,e)}}function rf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vt(t,e))return;i.uniform4uiv(this.addr,e),Mt(t,e)}}function sf(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(Qs.compareFunction=t.isReversedDepthBuffer()?la:oa,s=Qs):s=ol,t.setTexture2D(e||s,r)}function af(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||cl,r)}function of(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||dl,r)}function lf(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||ll,r)}function cf(i){switch(i){case 5126:return kh;case 35664:return Wh;case 35665:return Xh;case 35666:return qh;case 35674:return Yh;case 35675:return $h;case 35676:return Kh;case 5124:case 35670:return Zh;case 35667:case 35671:return Jh;case 35668:case 35672:return Qh;case 35669:case 35673:return jh;case 5125:return ef;case 36294:return tf;case 36295:return nf;case 36296:return rf;case 35678:case 36198:case 36298:case 36306:case 35682:return sf;case 35679:case 36299:case 36307:return af;case 35680:case 36300:case 36308:case 36293:return of;case 36289:case 36303:case 36311:case 36292:return lf}}function df(i,e){i.uniform1fv(this.addr,e)}function uf(i,e){const t=_i(e,this.size,2);i.uniform2fv(this.addr,t)}function hf(i,e){const t=_i(e,this.size,3);i.uniform3fv(this.addr,t)}function ff(i,e){const t=_i(e,this.size,4);i.uniform4fv(this.addr,t)}function pf(i,e){const t=_i(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function mf(i,e){const t=_i(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function gf(i,e){const t=_i(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function _f(i,e){i.uniform1iv(this.addr,e)}function xf(i,e){i.uniform2iv(this.addr,e)}function vf(i,e){i.uniform3iv(this.addr,e)}function Mf(i,e){i.uniform4iv(this.addr,e)}function Sf(i,e){i.uniform1uiv(this.addr,e)}function Ef(i,e){i.uniform2uiv(this.addr,e)}function yf(i,e){i.uniform3uiv(this.addr,e)}function bf(i,e){i.uniform4uiv(this.addr,e)}function Tf(i,e,t){const n=this.cache,r=e.length,s=Cr(t,r);vt(n,s)||(i.uniform1iv(this.addr,s),Mt(n,s));let a;this.type===i.SAMPLER_2D_SHADOW?a=Qs:a=ol;for(let o=0;o!==r;++o)t.setTexture2D(e[o]||a,s[o])}function Af(i,e,t){const n=this.cache,r=e.length,s=Cr(t,r);vt(n,s)||(i.uniform1iv(this.addr,s),Mt(n,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||cl,s[a])}function wf(i,e,t){const n=this.cache,r=e.length,s=Cr(t,r);vt(n,s)||(i.uniform1iv(this.addr,s),Mt(n,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||dl,s[a])}function Rf(i,e,t){const n=this.cache,r=e.length,s=Cr(t,r);vt(n,s)||(i.uniform1iv(this.addr,s),Mt(n,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||ll,s[a])}function Cf(i){switch(i){case 5126:return df;case 35664:return uf;case 35665:return hf;case 35666:return ff;case 35674:return pf;case 35675:return mf;case 35676:return gf;case 5124:case 35670:return _f;case 35667:case 35671:return xf;case 35668:case 35672:return vf;case 35669:case 35673:return Mf;case 5125:return Sf;case 36294:return Ef;case 36295:return yf;case 36296:return bf;case 35678:case 36198:case 36298:case 36306:case 35682:return Tf;case 35679:case 36299:case 36307:return Af;case 35680:case 36300:case 36308:case 36293:return wf;case 36289:case 36303:case 36311:case 36292:return Rf}}class Pf{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=cf(t.type)}}class Lf{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Cf(t.type)}}class Df{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],n)}}}const ls=/(\w+)(\])?(\[|\.)?/g;function co(i,e){i.seq.push(e),i.map[e.id]=e}function If(i,e,t){const n=i.name,r=n.length;for(ls.lastIndex=0;;){const s=ls.exec(n),a=ls.lastIndex;let o=s[1];const c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===r){co(t,l===void 0?new Pf(o,i,e):new Lf(o,i,e));break}else{let p=t.map[o];p===void 0&&(p=new Df(o),co(t,p)),t=p}}}class vr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=e.getActiveUniform(t,a),c=e.getUniformLocation(t,o.name);If(o,c,this)}const r=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&n.push(a)}return n}}function uo(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const Uf=37297;let Nf=0;function Ff(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const ho=new Ie;function Of(i){Ve._getMatrix(ho,Ve.workingColorSpace,i);const e=`mat3( ${ho.elements.map(t=>t.toFixed(4))} )`;switch(Ve.getTransfer(i)){case yr:return[e,"LinearTransferOETF"];case et:return[e,"sRGBTransferOETF"];default:return Pe("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function fo(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=(i.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+Ff(i.getShaderSource(e),o)}else return s}function Bf(i,e){const t=Of(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const zf={[Lo]:"Linear",[Do]:"Reinhard",[Io]:"Cineon",[Uo]:"ACESFilmic",[Fo]:"AgX",[Oo]:"Neutral",[No]:"Custom"};function Gf(i,e){const t=zf[e];return t===void 0?(Pe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const hr=new k;function Hf(){Ve.getLuminanceCoefficients(hr);const i=hr.x.toFixed(4),e=hr.y.toFixed(4),t=hr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Vf(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ri).join(`
`)}function kf(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Wf(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),a=s.name;let o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Ri(i){return i!==""}function po(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function mo(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Xf=/^[ \t]*#include +<([\w\d./]+)>/gm;function js(i){return i.replace(Xf,Yf)}const qf=new Map;function Yf(i,e){let t=Be[e];if(t===void 0){const n=qf.get(e);if(n!==void 0)t=Be[n],Pe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return js(t)}const $f=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function go(i){return i.replace($f,Kf)}function Kf(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function _o(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const Zf={[pr]:"SHADOWMAP_TYPE_PCF",[wi]:"SHADOWMAP_TYPE_VSM"};function Jf(i){return Zf[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Qf={[Wn]:"ENVMAP_TYPE_CUBE",[pi]:"ENVMAP_TYPE_CUBE",[Ar]:"ENVMAP_TYPE_CUBE_UV"};function jf(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":Qf[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const ep={[pi]:"ENVMAP_MODE_REFRACTION"};function tp(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":ep[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const np={[Po]:"ENVMAP_BLENDING_MULTIPLY",[Ol]:"ENVMAP_BLENDING_MIX",[Bl]:"ENVMAP_BLENDING_ADD"};function ip(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":np[i.combine]||"ENVMAP_BLENDING_NONE"}function rp(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function sp(i,e,t,n){const r=i.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=Jf(t),l=jf(t),h=tp(t),p=ip(t),d=rp(t),g=Vf(t),v=kf(s),A=r.createProgram();let m,u,w=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Ri).join(`
`),m.length>0&&(m+=`
`),u=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Ri).join(`
`),u.length>0&&(u+=`
`)):(m=[_o(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ri).join(`
`),u=[_o(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+p:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==on?"#define TONE_MAPPING":"",t.toneMapping!==on?Be.tonemapping_pars_fragment:"",t.toneMapping!==on?Gf("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Be.colorspace_pars_fragment,Bf("linearToOutputTexel",t.outputColorSpace),Hf(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ri).join(`
`)),a=js(a),a=po(a,t),a=mo(a,t),o=js(o),o=po(o,t),o=mo(o,t),a=go(a),o=go(o),t.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,m=[g,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,u=["#define varying in",t.glslVersion===Ra?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ra?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const U=w+m+a,M=w+u+o,T=uo(r,r.VERTEX_SHADER,U),y=uo(r,r.FRAGMENT_SHADER,M);r.attachShader(A,T),r.attachShader(A,y),t.index0AttributeName!==void 0?r.bindAttribLocation(A,0,t.index0AttributeName):t.hasPositionAttribute===!0&&r.bindAttribLocation(A,0,"position"),r.linkProgram(A);function P(F){if(i.debug.checkShaderErrors){const O=r.getProgramInfoLog(A)||"",z=r.getShaderInfoLog(T)||"",I=r.getShaderInfoLog(y)||"",X=O.trim(),Q=z.trim(),Z=I.trim();let oe=!0,Y=!0;if(r.getProgramParameter(A,r.LINK_STATUS)===!1)if(oe=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,A,T,y);else{const te=fo(r,T,"vertex"),ae=fo(r,y,"fragment");Ke("WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(A,r.VALIDATE_STATUS)+`

Material Name: `+F.name+`
Material Type: `+F.type+`

Program Info Log: `+X+`
`+te+`
`+ae)}else X!==""?Pe("WebGLProgram: Program Info Log:",X):(Q===""||Z==="")&&(Y=!1);Y&&(F.diagnostics={runnable:oe,programLog:X,vertexShader:{log:Q,prefix:m},fragmentShader:{log:Z,prefix:u}})}r.deleteShader(T),r.deleteShader(y),_=new vr(r,A),E=Wf(r,A)}let _;this.getUniforms=function(){return _===void 0&&P(this),_};let E;this.getAttributes=function(){return E===void 0&&P(this),E};let C=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=r.getProgramParameter(A,Uf)),C},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(A),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Nf++,this.cacheKey=e,this.usedTimes=1,this.program=A,this.vertexShader=T,this.fragmentShader=y,this}let ap=0;class op{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){const r=this._getShaderCacheForMaterial(e);return r.has(t)===!1&&(r.add(t),t.usedTimes++),r.has(n)===!1&&(r.add(n),n.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new lp(e),t.set(e,n)),n}}class lp{constructor(e){this.id=ap++,this.code=e,this.usedTimes=0}}function cp(i){return i===Xn||i===Mr||i===Sr}function dp(i,e,t,n,r,s){const a=new $o,o=new op,c=new Set,l=[],h=new Map,p=n.logarithmicDepthBuffer;let d=n.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(_){return c.add(_),_===0?"uv":`uv${_}`}function A(_,E,C,F,O,z){const I=F.fog,X=O.geometry,Q=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?F.environment:null,Z=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,oe=e.get(_.envMap||Q,Z),Y=oe&&oe.mapping===Ar?oe.image.height:null,te=g[_.type];_.precision!==null&&(d=n.getMaxPrecision(_.precision),d!==_.precision&&Pe("WebGLProgram.getParameters:",_.precision,"not supported, using",d,"instead."));const ae=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,Ce=ae!==void 0?ae.length:0;let we=0;X.morphAttributes.position!==void 0&&(we=1),X.morphAttributes.normal!==void 0&&(we=2),X.morphAttributes.color!==void 0&&(we=3);let tt,Ne,qe,$;if(te){const Xe=rn[te];tt=Xe.vertexShader,Ne=Xe.fragmentShader}else{tt=_.vertexShader,Ne=_.fragmentShader;const Xe=o.getVertexShaderStage(_),De=o.getFragmentShaderStage(_);o.update(_,Xe,De),qe=Xe.id,$=De.id}const ne=i.getRenderTarget(),xe=i.state.buffers.depth.getReversed(),Le=O.isInstancedMesh===!0,ve=O.isBatchedMesh===!0,Fe=!!_.map,ct=!!_.matcap,ze=!!oe,He=!!_.aoMap,nt=!!_.lightMap,Ue=!!_.bumpMap&&_.wireframe===!1,st=!!_.normalMap,gt=!!_.displacementMap,wt=!!_.emissiveMap,at=!!_.metalnessMap,ht=!!_.roughnessMap,N=_.anisotropy>0,St=_.clearcoat>0,Ze=_.dispersion>0,b=_.retroreflectivity>0,f=_.iridescence>0,B=_.sheen>0,W=_.transmission>0,K=N&&!!_.anisotropyMap,ue=St&&!!_.clearcoatMap,he=St&&!!_.clearcoatNormalMap,S=St&&!!_.clearcoatRoughnessMap,L=f&&!!_.iridescenceMap,j=f&&!!_.iridescenceThicknessMap,de=B&&!!_.sheenColorMap,se=B&&!!_.sheenRoughnessMap,ie=!!_.specularMap,fe=!!_.specularColorMap,Ee=!!_.specularIntensityMap,be=W&&!!_.transmissionMap,R=W&&!!_.thicknessMap,J=!!_.gradientMap,G=!!_.alphaMap,re=_.alphaTest>0,ce=!!_.alphaHash,ee=!!_.extensions;let Me=on;_.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(Me=i.toneMapping);const _e={shaderID:te,shaderType:_.type,shaderName:_.name,vertexShader:tt,fragmentShader:Ne,defines:_.defines,customVertexShaderID:qe,customFragmentShaderID:$,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:d,batching:ve,batchingColor:ve&&O._colorsTexture!==null,instancing:Le,instancingColor:Le&&O.instanceColor!==null,instancingMorph:Le&&O.morphTexture!==null,outputColorSpace:ne===null?i.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:Ve.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:Fe,matcap:ct,envMap:ze,envMapMode:ze&&oe.mapping,envMapCubeUVHeight:Y,aoMap:He,lightMap:nt,bumpMap:Ue,normalMap:st,displacementMap:gt,emissiveMap:wt,normalMapObjectSpace:st&&_.normalMapType===Hl,normalMapTangentSpace:st&&_.normalMapType===Zs,packedNormalMap:st&&_.normalMapType===Zs&&cp(_.normalMap.format),metalnessMap:at,roughnessMap:ht,anisotropy:N,anisotropyMap:K,clearcoat:St,clearcoatMap:ue,clearcoatNormalMap:he,clearcoatRoughnessMap:S,dispersion:Ze,retroreflection:b,iridescence:f,iridescenceMap:L,iridescenceThicknessMap:j,sheen:B,sheenColorMap:de,sheenRoughnessMap:se,specularMap:ie,specularColorMap:fe,specularIntensityMap:Ee,transmission:W,transmissionMap:be,thicknessMap:R,gradientMap:J,opaque:_.transparent===!1&&_.blending===Ci&&_.alphaToCoverage===!1,alphaMap:G,alphaTest:re,alphaHash:ce,combine:_.combine,mapUv:Fe&&v(_.map.channel),aoMapUv:He&&v(_.aoMap.channel),lightMapUv:nt&&v(_.lightMap.channel),bumpMapUv:Ue&&v(_.bumpMap.channel),normalMapUv:st&&v(_.normalMap.channel),displacementMapUv:gt&&v(_.displacementMap.channel),emissiveMapUv:wt&&v(_.emissiveMap.channel),metalnessMapUv:at&&v(_.metalnessMap.channel),roughnessMapUv:ht&&v(_.roughnessMap.channel),anisotropyMapUv:K&&v(_.anisotropyMap.channel),clearcoatMapUv:ue&&v(_.clearcoatMap.channel),clearcoatNormalMapUv:he&&v(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:S&&v(_.clearcoatRoughnessMap.channel),iridescenceMapUv:L&&v(_.iridescenceMap.channel),iridescenceThicknessMapUv:j&&v(_.iridescenceThicknessMap.channel),sheenColorMapUv:de&&v(_.sheenColorMap.channel),sheenRoughnessMapUv:se&&v(_.sheenRoughnessMap.channel),specularMapUv:ie&&v(_.specularMap.channel),specularColorMapUv:fe&&v(_.specularColorMap.channel),specularIntensityMapUv:Ee&&v(_.specularIntensityMap.channel),transmissionMapUv:be&&v(_.transmissionMap.channel),thicknessMapUv:R&&v(_.thicknessMap.channel),alphaMapUv:G&&v(_.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(st||N),vertexNormals:!!X.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!X.attributes.uv&&(Fe||G),fog:!!I,useFog:_.fog===!0,fogExp2:!!I&&I.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||X.attributes.normal===void 0&&st===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:p,reversedDepthBuffer:xe,skinning:O.isSkinnedMesh===!0,hasPositionAttribute:X.attributes.position!==void 0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:Ce,morphTextureStride:we,numSunLights:E.sun.length,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numSunLightShadows:E.sunShadowMap.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numLightProbeGrids:z.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:Me,decodeVideoTexture:Fe&&_.map.isVideoTexture===!0&&Ve.getTransfer(_.map.colorSpace)===et,decodeVideoTextureEmissive:wt&&_.emissiveMap.isVideoTexture===!0&&Ve.getTransfer(_.emissiveMap.colorSpace)===et,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===gn,flipSided:_.side===Ot,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:ee&&_.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ee&&_.extensions.multiDraw===!0||ve)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return _e.vertexUv1s=c.has(1),_e.vertexUv2s=c.has(2),_e.vertexUv3s=c.has(3),c.clear(),_e}function m(_){const E=[];if(_.shaderID?E.push(_.shaderID):(E.push(_.customVertexShaderID),E.push(_.customFragmentShaderID)),_.defines!==void 0)for(const C in _.defines)E.push(C),E.push(_.defines[C]);return _.isRawShaderMaterial===!1&&(u(E,_),w(E,_),E.push(i.outputColorSpace)),E.push(_.customProgramCacheKey),E.join()}function u(_,E){_.push(E.precision),_.push(E.outputColorSpace),_.push(E.envMapMode),_.push(E.envMapCubeUVHeight),_.push(E.mapUv),_.push(E.alphaMapUv),_.push(E.lightMapUv),_.push(E.aoMapUv),_.push(E.bumpMapUv),_.push(E.normalMapUv),_.push(E.displacementMapUv),_.push(E.emissiveMapUv),_.push(E.metalnessMapUv),_.push(E.roughnessMapUv),_.push(E.anisotropyMapUv),_.push(E.clearcoatMapUv),_.push(E.clearcoatNormalMapUv),_.push(E.clearcoatRoughnessMapUv),_.push(E.iridescenceMapUv),_.push(E.iridescenceThicknessMapUv),_.push(E.sheenColorMapUv),_.push(E.sheenRoughnessMapUv),_.push(E.specularMapUv),_.push(E.specularColorMapUv),_.push(E.specularIntensityMapUv),_.push(E.transmissionMapUv),_.push(E.thicknessMapUv),_.push(E.combine),_.push(E.fogExp2),_.push(E.sizeAttenuation),_.push(E.morphTargetsCount),_.push(E.morphAttributeCount),_.push(E.numSunLights),_.push(E.numDirLights),_.push(E.numPointLights),_.push(E.numSpotLights),_.push(E.numSpotLightMaps),_.push(E.numHemiLights),_.push(E.numRectAreaLights),_.push(E.numSunLightShadows),_.push(E.numDirLightShadows),_.push(E.numPointLightShadows),_.push(E.numSpotLightShadows),_.push(E.numSpotLightShadowsWithMaps),_.push(E.numLightProbes),_.push(E.shadowMapType),_.push(E.toneMapping),_.push(E.numClippingPlanes),_.push(E.numClipIntersection),_.push(E.depthPacking)}function w(_,E){a.disableAll(),E.instancing&&a.enable(0),E.instancingColor&&a.enable(1),E.instancingMorph&&a.enable(2),E.matcap&&a.enable(3),E.envMap&&a.enable(4),E.normalMapObjectSpace&&a.enable(5),E.normalMapTangentSpace&&a.enable(6),E.clearcoat&&a.enable(7),E.iridescence&&a.enable(8),E.alphaTest&&a.enable(9),E.vertexColors&&a.enable(10),E.vertexAlphas&&a.enable(11),E.vertexUv1s&&a.enable(12),E.vertexUv2s&&a.enable(13),E.vertexUv3s&&a.enable(14),E.vertexTangents&&a.enable(15),E.anisotropy&&a.enable(16),E.alphaHash&&a.enable(17),E.batching&&a.enable(18),E.dispersion&&a.enable(19),E.retroreflection&&a.enable(24),E.batchingColor&&a.enable(20),E.gradientMap&&a.enable(21),E.packedNormalMap&&a.enable(22),E.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reversedDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),E.numLightProbeGrids>0&&a.enable(22),E.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function U(_){const E=g[_.type];let C;if(E){const F=rn[E];C=wc.clone(F.uniforms)}else C=_.uniforms;return C}function M(_,E){let C=h.get(E);return C!==void 0?++C.usedTimes:(C=new sp(i,E,_,r),l.push(C),h.set(E,C)),C}function T(_){if(--_.usedTimes===0){const E=l.indexOf(_);l[E]=l[l.length-1],l.pop(),h.delete(_.cacheKey),_.destroy()}}function y(_){o.remove(_)}function P(){o.dispose()}return{getParameters:A,getProgramCacheKey:m,getUniforms:U,acquireProgram:M,releaseProgram:T,releaseShaderCache:y,programs:l,dispose:P}}function up(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function r(a,o,c){i.get(a)[o]=c}function s(){i=new WeakMap}return{has:e,get:t,remove:n,update:r,dispose:s}}function hp(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function xo(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function vo(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function a(d){let g=0;return d.isInstancedMesh&&(g+=2),d.isSkinnedMesh&&(g+=1),g}function o(d,g,v,A,m,u){let w=i[e];return w===void 0?(w={id:d.id,object:d,geometry:g,material:v,materialVariant:a(d),groupOrder:A,renderOrder:d.renderOrder,z:m,group:u},i[e]=w):(w.id=d.id,w.object=d,w.geometry=g,w.material=v,w.materialVariant=a(d),w.groupOrder=A,w.renderOrder=d.renderOrder,w.z=m,w.group=u),e++,w}function c(d,g,v,A,m,u,w){w.reversedDepth===!0&&(m=-m);const U=o(d,g,v,A,m,u);v.transmission>0?n.push(U):v.transparent===!0?r.push(U):t.push(U)}function l(d,g,v,A,m,u){const w=o(d,g,v,A,m,u);v.transmission>0?n.unshift(w):v.transparent===!0?r.unshift(w):t.unshift(w)}function h(d,g){t.length>1&&t.sort(d||hp),n.length>1&&n.sort(g||xo),r.length>1&&r.sort(g||xo)}function p(){for(let d=e,g=i.length;d<g;d++){const v=i[d];if(v.id===null)break;v.id=null,v.object=null,v.geometry=null,v.material=null,v.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:c,unshift:l,finish:p,sort:h}}function fp(){let i=new WeakMap;function e(n,r){const s=i.get(n);let a;return s===void 0?(a=new vo,i.set(n,[a])):r>=s.length?(a=new vo,s.push(a)):a=s[r],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function pp(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new k,color:new $e};break;case"SpotLight":t={position:new k,direction:new k,color:new $e,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new k,color:new $e,distance:0,decay:0};break;case"HemisphereLight":t={direction:new k,skyColor:new $e,groundColor:new $e};break;case"RectAreaLight":t={color:new $e,position:new k,halfWidth:new k,halfHeight:new k};break}return i[e.id]=t,t}}}function mp(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new We,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let gp=0;function _p(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function xp(i){const e=new pp,t=mp(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new k);const r=new k,s=new pt,a=new pt;function o(l){let h=0,p=0,d=0;for(let O=0;O<9;O++)n.probe[O].set(0,0,0);let g=0,v=0,A=0,m=0,u=0,w=0,U=0,M=0,T=0,y=0,P=0,_=0,E=0,C=0;l.sort(_p);for(let O=0,z=l.length;O<z;O++){const I=l[O],X=I.color,Q=I.intensity,Z=I.distance;let oe=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===Xn?oe=I.shadow.map.texture:oe=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)h+=X.r*Q,p+=X.g*Q,d+=X.b*Q;else if(I.isLightProbe){for(let Y=0;Y<9;Y++)n.probe[Y].addScaledVector(I.sh.coefficients[Y],Q);C++}else if(I.isSunLight){const Y=e.get(I);if(Y.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const te=I.shadow,ae=t.get(I);ae.shadowIntensity=te.intensity,ae.shadowBias=te.bias,ae.shadowNormalBias=te.normalBias,ae.shadowRadius=te.radius,ae.shadowMapSize.copy(te.mapSize).multiply(te.getFrameExtents()),n.sunShadow[v]=ae,n.sunShadowMap[v]=oe;const Ce=te.getViewportCount();for(let we=0;we<Ce;we++)n.sunShadowMatrix[A+we]=te.getMatrix(we),n.sunShadowCascade[A+we]=te._cascadeData[we];A+=Ce,v++}n.sun[g]=Y,g++}else if(I.isDirectionalLight){const Y=e.get(I);if(Y.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const te=I.shadow,ae=t.get(I);ae.shadowIntensity=te.intensity,ae.shadowBias=te.bias,ae.shadowNormalBias=te.normalBias,ae.shadowRadius=te.radius,ae.shadowMapSize=te.mapSize,n.directionalShadow[m]=ae,n.directionalShadowMap[m]=oe,n.directionalShadowMatrix[m]=I.shadow.matrix,T++}n.directional[m]=Y,m++}else if(I.isSpotLight){const Y=e.get(I);Y.position.setFromMatrixPosition(I.matrixWorld),Y.color.copy(X).multiplyScalar(Q),Y.distance=Z,Y.coneCos=Math.cos(I.angle),Y.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),Y.decay=I.decay,n.spot[w]=Y;const te=I.shadow;if(I.map&&(n.spotLightMap[_]=I.map,_++,te.updateMatrices(I),I.castShadow&&E++),n.spotLightMatrix[w]=te.matrix,I.castShadow){const ae=t.get(I);ae.shadowIntensity=te.intensity,ae.shadowBias=te.bias,ae.shadowNormalBias=te.normalBias,ae.shadowRadius=te.radius,ae.shadowMapSize=te.mapSize,n.spotShadow[w]=ae,n.spotShadowMap[w]=oe,P++}w++}else if(I.isRectAreaLight){const Y=e.get(I);Y.color.copy(X).multiplyScalar(Q),Y.halfWidth.set(I.width*.5,0,0),Y.halfHeight.set(0,I.height*.5,0),n.rectArea[U]=Y,U++}else if(I.isPointLight){const Y=e.get(I);if(Y.color.copy(I.color).multiplyScalar(I.intensity),Y.distance=I.distance,Y.decay=I.decay,I.castShadow){const te=I.shadow,ae=t.get(I);ae.shadowIntensity=te.intensity,ae.shadowBias=te.bias,ae.shadowNormalBias=te.normalBias,ae.shadowRadius=te.radius,ae.shadowMapSize=te.mapSize,ae.shadowCameraNear=te.camera.near,ae.shadowCameraFar=te.camera.far,n.pointShadow[u]=ae,n.pointShadowMap[u]=oe,n.pointShadowMatrix[u]=I.shadow.matrix,y++}n.point[u]=Y,u++}else if(I.isHemisphereLight){const Y=e.get(I);Y.skyColor.copy(I.color).multiplyScalar(Q),Y.groundColor.copy(I.groundColor).multiplyScalar(Q),n.hemi[M]=Y,M++}}U>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=pe.LTC_FLOAT_1,n.rectAreaLTC2=pe.LTC_FLOAT_2):(n.rectAreaLTC1=pe.LTC_HALF_1,n.rectAreaLTC2=pe.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=p,n.ambient[2]=d;const F=n.hash;(F.sunLength!==g||F.directionalLength!==m||F.pointLength!==u||F.spotLength!==w||F.rectAreaLength!==U||F.hemiLength!==M||F.numSunShadows!==v||F.numDirectionalShadows!==T||F.numPointShadows!==y||F.numSpotShadows!==P||F.numSpotMaps!==_||F.numLightProbes!==C)&&(n.sun.length=g,n.directional.length=m,n.spot.length=w,n.rectArea.length=U,n.point.length=u,n.hemi.length=M,n.sunShadow.length=v,n.sunShadowMap.length=v,n.sunShadowMatrix.length=A,n.sunShadowCascade.length=A,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.directionalShadowMatrix.length=T,n.pointShadow.length=y,n.pointShadowMap.length=y,n.pointShadowMatrix.length=y,n.spotShadow.length=P,n.spotShadowMap.length=P,n.spotLightMatrix.length=P+_-E,n.spotLightMap.length=_,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=C,F.sunLength=g,F.directionalLength=m,F.pointLength=u,F.spotLength=w,F.rectAreaLength=U,F.hemiLength=M,F.numSunShadows=v,F.numDirectionalShadows=T,F.numPointShadows=y,F.numSpotShadows=P,F.numSpotMaps=_,F.numLightProbes=C,n.version=gp++)}function c(l,h){let p=0,d=0,g=0,v=0,A=0,m=0;const u=h.matrixWorldInverse;for(let w=0,U=l.length;w<U;w++){const M=l[w];if(M.isSunLight){const T=n.sun[p];T.direction.setFromMatrixPosition(M.matrixWorld),T.direction.transformDirection(u),p++}else if(M.isDirectionalLight){const T=n.directional[d];T.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),T.direction.sub(r),T.direction.transformDirection(u),d++}else if(M.isSpotLight){const T=n.spot[v];T.position.setFromMatrixPosition(M.matrixWorld),T.position.applyMatrix4(u),T.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),T.direction.sub(r),T.direction.transformDirection(u),v++}else if(M.isRectAreaLight){const T=n.rectArea[A];T.position.setFromMatrixPosition(M.matrixWorld),T.position.applyMatrix4(u),a.identity(),s.copy(M.matrixWorld),s.premultiply(u),a.extractRotation(s),T.halfWidth.set(M.width*.5,0,0),T.halfHeight.set(0,M.height*.5,0),T.halfWidth.applyMatrix4(a),T.halfHeight.applyMatrix4(a),A++}else if(M.isPointLight){const T=n.point[g];T.position.setFromMatrixPosition(M.matrixWorld),T.position.applyMatrix4(u),g++}else if(M.isHemisphereLight){const T=n.hemi[m];T.direction.setFromMatrixPosition(M.matrixWorld),T.direction.transformDirection(u),m++}}}return{setup:o,setupView:c,state:n}}function Mo(i){const e=new xp(i),t=[],n=[],r=[];function s(d){p.camera=d,t.length=0,n.length=0,r.length=0}function a(d){t.push(d)}function o(d){n.push(d)}function c(d){r.push(d)}function l(){e.setup(t)}function h(d){e.setupView(t,d)}const p={lightsArray:t,shadowsArray:n,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:p,setupLights:l,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:c}}function vp(i){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new Mo(i),e.set(r,[o])):s>=a.length?(o=new Mo(i),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const Mp=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Sp=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Ep=[new k(1,0,0),new k(-1,0,0),new k(0,1,0),new k(0,-1,0),new k(0,0,1),new k(0,0,-1)],yp=[new k(0,-1,0),new k(0,-1,0),new k(0,0,1),new k(0,0,-1),new k(0,-1,0),new k(0,-1,0)],So=new pt,Ai=new k,cs=new k;function bp(i,e,t){let n=new ua;const r=new We,s=new We,a=new ut,o=new Lc,c=new Dc,l={},h=t.maxTextureSize,p={[kn]:Ot,[Ot]:kn,[gn]:gn},d=new dn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new We},radius:{value:4}},vertexShader:Mp,fragmentShader:Sp}),g=d.clone();g.defines.HORIZONTAL_PASS=1;const v=new Xt;v.setAttribute("position",new Mn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const A=new Tt(v,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=pr;let u=this.type;this.render=function(y,P,_){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||y.length===0)return;this.type===xl&&(Pe("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=pr);const E=i.getRenderTarget(),C=i.getActiveCubeFace(),F=i.getActiveMipmapLevel(),O=i.state;O.setBlending(xn),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const z=u!==this.type;z&&P.traverse(function(I){I.material&&(Array.isArray(I.material)?I.material.forEach(X=>X.needsUpdate=!0):I.material.needsUpdate=!0)});for(let I=0,X=y.length;I<X;I++){const Q=y[I],Z=Q.shadow;if(Z===void 0){Pe("WebGLShadowMap:",Q,"has no shadow.");continue}if(Z.autoUpdate===!1&&Z.needsUpdate===!1)continue;r.copy(Z.mapSize);const oe=Z.getFrameExtents();r.multiply(oe),s.copy(Z.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(s.x=Math.floor(h/oe.x),r.x=s.x*oe.x,Z.mapSize.x=s.x),r.y>h&&(s.y=Math.floor(h/oe.y),r.y=s.y*oe.y,Z.mapSize.y=s.y));const Y=i.state.buffers.depth.getReversed();if(Z.camera._reversedDepth=Y,Z.map===null||z===!0){if(Z.map!==null&&(Z.map.depthTexture!==null&&(Z.map.depthTexture.dispose(),Z.map.depthTexture=null),Z.map.dispose()),this.type===wi){if(Q.isPointLight){Pe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}Z.map=new Qt(r.x,r.y,{format:Xn,type:cn,minFilter:Lt,magFilter:Lt,generateMipmaps:!1}),Z.map.texture.name=Q.name+".shadowMap",Z.map.depthTexture=new Fi(r.x,r.y,sn),Z.map.depthTexture.name=Q.name+".shadowMapDepth",Z.map.depthTexture.format=Sn,Z.map.depthTexture.compareFunction=null,Z.map.depthTexture.minFilter=At,Z.map.depthTexture.magFilter=At}else Q.isPointLight?(Z.map=new al(r.x),Z.map.depthTexture=new Tc(r.x,ln)):(Z.map=new Qt(r.x,r.y),Z.map.depthTexture=new Fi(r.x,r.y,ln)),Z.map.depthTexture.name=Q.name+".shadowMap",Z.map.depthTexture.format=Sn,this.type===pr?(Z.map.depthTexture.compareFunction=Y?la:oa,Z.map.depthTexture.minFilter=Lt,Z.map.depthTexture.magFilter=Lt):(Z.map.depthTexture.compareFunction=null,Z.map.depthTexture.minFilter=At,Z.map.depthTexture.magFilter=At);Z.camera.updateProjectionMatrix()}Z.map.isWebGLCubeRenderTarget!==!0&&(Z.map.width!==r.x||Z.map.height!==r.y)&&Z.map.setSize(r.x,r.y);const te=Z.map.isWebGLCubeRenderTarget?6:Z.getViewportCount();Q.isPointLight!==!0&&Z.updateMatrices(Q,_);for(let ae=0;ae<te;ae++){const Ce=Z.getCamera(ae);if(Q.isPointLight){const we=Z.camera,tt=Z.matrix,Ne=Q.distance||we.far;Ne!==we.far&&(we.far=Ne,we.updateProjectionMatrix()),Ai.setFromMatrixPosition(Q.matrixWorld),we.position.copy(Ai),cs.copy(we.position),cs.add(Ep[ae]),we.up.copy(yp[ae]),we.lookAt(cs),we.updateMatrixWorld(),tt.makeTranslation(-Ai.x,-Ai.y,-Ai.z),So.multiplyMatrices(we.projectionMatrix,we.matrixWorldInverse),Z._frustum.setFromProjectionMatrix(So,we.coordinateSystem,we.reversedDepth)}if(Z.map.isWebGLCubeRenderTarget)i.setRenderTarget(Z.map,ae),i.clear();else{ae===0&&(i.setRenderTarget(Z.map),i.clear());const we=Z.getViewport(ae);a.set(s.x*we.x,s.y*we.y,s.x*we.z,s.y*we.w),O.viewport(a)}n=Z.getFrustum(ae),M(P,_,Ce,Q,this.type)}Z.isPointLightShadow!==!0&&this.type===wi&&w(Z,_),Z.needsUpdate=!1}u=this.type,m.needsUpdate=!1,i.setRenderTarget(E,C,F)};function w(y,P){const _=e.update(A);d.defines.VSM_SAMPLES!==y.blurSamples&&(d.defines.VSM_SAMPLES=y.blurSamples,g.defines.VSM_SAMPLES=y.blurSamples,d.needsUpdate=!0,g.needsUpdate=!0),y.mapPass===null?y.mapPass=new Qt(r.x,r.y,{format:Xn,type:cn}):(y.mapPass.width!==y.map.width||y.mapPass.height!==y.map.height)&&y.mapPass.setSize(y.map.width,y.map.height),d.uniforms.shadow_pass.value=y.map.depthTexture,d.uniforms.resolution.value.set(y.map.width,y.map.height),d.uniforms.radius.value=y.radius,i.setRenderTarget(y.mapPass),i.clear(),i.renderBufferDirect(P,null,_,d,A,null),g.uniforms.shadow_pass.value=y.mapPass.texture,g.uniforms.resolution.value.set(y.map.width,y.map.height),g.uniforms.radius.value=y.radius,i.setRenderTarget(y.map),i.clear(),i.renderBufferDirect(P,null,_,g,A,null)}function U(y,P,_,E){let C=null;const F=_.isPointLight===!0?y.customDistanceMaterial:y.customDepthMaterial;if(F!==void 0)C=F;else if(C=_.isPointLight===!0?c:o,i.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){const O=C.uuid,z=P.uuid;let I=l[O];I===void 0&&(I={},l[O]=I);let X=I[z];X===void 0&&(X=C.clone(),I[z]=X,P.addEventListener("dispose",T)),C=X}if(C.visible=P.visible,C.wireframe=P.wireframe,E===wi?C.side=P.shadowSide!==null?P.shadowSide:P.side:C.side=P.shadowSide!==null?P.shadowSide:p[P.side],C.alphaMap=P.alphaMap,C.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,C.map=P.map,C.clipShadows=P.clipShadows,C.clippingPlanes=P.clippingPlanes,C.clipIntersection=P.clipIntersection,C.displacementMap=P.displacementMap,C.displacementScale=P.displacementScale,C.displacementBias=P.displacementBias,C.wireframeLinewidth=P.wireframeLinewidth,C.linewidth=P.linewidth,_.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const O=i.properties.get(C);O.light=_}return C}function M(y,P,_,E,C){if(y.visible===!1)return;if(y.layers.test(P.layers)&&(y.isMesh||y.isLine||y.isPoints)&&(y.castShadow||y.receiveShadow&&C===wi)&&(!y.frustumCulled||y.intersectsFrustum(n))){y.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,y.matrixWorld);const z=e.update(y),I=y.material;if(Array.isArray(I)){const X=z.groups;for(let Q=0,Z=X.length;Q<Z;Q++){const oe=X[Q],Y=I[oe.materialIndex];if(Y&&Y.visible){const te=U(y,Y,E,C);y.onBeforeShadow(i,y,P,_,z,te,oe),i.renderBufferDirect(_,null,z,te,y,oe),y.onAfterShadow(i,y,P,_,z,te,oe)}}}else if(I.visible){const X=U(y,I,E,C);y.onBeforeShadow(i,y,P,_,z,X,null),i.renderBufferDirect(_,null,z,X,y,null),y.onAfterShadow(i,y,P,_,z,X,null)}}const O=y.children;for(let z=0,I=O.length;z<I;z++)M(O[z],P,_,E,C)}function T(y){y.target.removeEventListener("dispose",T);for(const _ in l){const E=l[_],C=y.target.uuid;C in E&&(E[C].dispose(),delete E[C])}}}function Tp(i,e){function t(){let R=!1;const J=new ut;let G=null;const re=new ut(0,0,0,0);return{setMask:function(ce){G!==ce&&!R&&(i.colorMask(ce,ce,ce,ce),G=ce)},setLocked:function(ce){R=ce},setClear:function(ce,ee,Me,_e,Xe){Xe===!0&&(ce*=_e,ee*=_e,Me*=_e),J.set(ce,ee,Me,_e),re.equals(J)===!1&&(i.clearColor(ce,ee,Me,_e),re.copy(J))},reset:function(){R=!1,G=null,re.set(-1,0,0,0)}}}function n(){let R=!1,J=!1,G=null,re=null,ce=null;return{setReversed:function(ee){if(J!==ee){const Me=e.get("EXT_clip_control");ee?Me.clipControlEXT(Me.LOWER_LEFT_EXT,Me.ZERO_TO_ONE_EXT):Me.clipControlEXT(Me.LOWER_LEFT_EXT,Me.NEGATIVE_ONE_TO_ONE_EXT),J=ee;const _e=ce;ce=null,this.setClear(_e)}},getReversed:function(){return J},setTest:function(ee){ee?ne(i.DEPTH_TEST):xe(i.DEPTH_TEST)},setMask:function(ee){G!==ee&&!R&&(i.depthMask(ee),G=ee)},setFunc:function(ee){if(J&&(ee=jl[ee]),re!==ee){switch(ee){case us:i.depthFunc(i.NEVER);break;case hs:i.depthFunc(i.ALWAYS);break;case fs:i.depthFunc(i.LESS);break;case Di:i.depthFunc(i.LEQUAL);break;case ps:i.depthFunc(i.EQUAL);break;case ms:i.depthFunc(i.GEQUAL);break;case gs:i.depthFunc(i.GREATER);break;case _s:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}re=ee}},setLocked:function(ee){R=ee},setClear:function(ee){ce!==ee&&(ce=ee,J&&(ee=1-ee),i.clearDepth(ee))},reset:function(){R=!1,G=null,re=null,ce=null,J=!1}}}function r(){let R=!1,J=null,G=null,re=null,ce=null,ee=null,Me=null,_e=null,Xe=null;return{setTest:function(De){R||(De?ne(i.STENCIL_TEST):xe(i.STENCIL_TEST))},setMask:function(De){J!==De&&!R&&(i.stencilMask(De),J=De)},setFunc:function(De,Je,dt){(G!==De||re!==Je||ce!==dt)&&(i.stencilFunc(De,Je,dt),G=De,re=Je,ce=dt)},setOp:function(De,Je,dt){(ee!==De||Me!==Je||_e!==dt)&&(i.stencilOp(De,Je,dt),ee=De,Me=Je,_e=dt)},setLocked:function(De){R=De},setClear:function(De){Xe!==De&&(i.clearStencil(De),Xe=De)},reset:function(){R=!1,J=null,G=null,re=null,ce=null,ee=null,Me=null,_e=null,Xe=null}}}const s=new t,a=new n,o=new r,c=new WeakMap,l=new WeakMap;let h={},p={},d={},g=new WeakMap,v=[],A=null,m=!1,u=null,w=null,U=null,M=null,T=null,y=null,P=null,_=new $e(0,0,0),E=0,C=!1,F=null,O=null,z=null,I=null,X=null;const Q=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Z=!1,oe=0;const Y=i.getParameter(i.VERSION);Y.indexOf("WebGL")!==-1?(oe=parseFloat(/^WebGL (\d)/.exec(Y)[1]),Z=oe>=1):Y.indexOf("OpenGL ES")!==-1&&(oe=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),Z=oe>=2);let te=null,ae={};const Ce=i.getParameter(i.SCISSOR_BOX),we=i.getParameter(i.VIEWPORT),tt=new ut().fromArray(Ce),Ne=new ut().fromArray(we);function qe(R,J,G,re){const ce=new Uint8Array(4),ee=i.createTexture();i.bindTexture(R,ee),i.texParameteri(R,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(R,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Me=0;Me<G;Me++)R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY?i.texImage3D(J,0,i.RGBA,1,1,re,0,i.RGBA,i.UNSIGNED_BYTE,ce):i.texImage2D(J+Me,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ce);return ee}const $={};$[i.TEXTURE_2D]=qe(i.TEXTURE_2D,i.TEXTURE_2D,1),$[i.TEXTURE_CUBE_MAP]=qe(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),$[i.TEXTURE_2D_ARRAY]=qe(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),$[i.TEXTURE_3D]=qe(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ne(i.DEPTH_TEST),a.setFunc(Di),Ue(!1),st(ba),ne(i.CULL_FACE),He(xn);function ne(R){h[R]!==!0&&(i.enable(R),h[R]=!0)}function xe(R){h[R]!==!1&&(i.disable(R),h[R]=!1)}function Le(R,J){return d[R]!==J?(i.bindFramebuffer(R,J),d[R]=J,R===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=J),R===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=J),!0):!1}function ve(R,J){let G=v,re=!1;if(R){G=g.get(J),G===void 0&&(G=[],g.set(J,G));const ce=R.textures;if(G.length!==ce.length||G[0]!==i.COLOR_ATTACHMENT0){for(let ee=0,Me=ce.length;ee<Me;ee++)G[ee]=i.COLOR_ATTACHMENT0+ee;G.length=ce.length,re=!0}}else G[0]!==i.BACK&&(G[0]=i.BACK,re=!0);re&&i.drawBuffers(G)}function Fe(R){return A!==R?(i.useProgram(R),A=R,!0):!1}const ct={[di]:i.FUNC_ADD,[Ml]:i.FUNC_SUBTRACT,[Sl]:i.FUNC_REVERSE_SUBTRACT};ct[El]=i.MIN,ct[yl]=i.MAX;const ze={[bl]:i.ZERO,[Tl]:i.ONE,[Al]:i.SRC_COLOR,[Ro]:i.SRC_ALPHA,[Dl]:i.SRC_ALPHA_SATURATE,[Pl]:i.DST_COLOR,[Rl]:i.DST_ALPHA,[wl]:i.ONE_MINUS_SRC_COLOR,[Co]:i.ONE_MINUS_SRC_ALPHA,[Ll]:i.ONE_MINUS_DST_COLOR,[Cl]:i.ONE_MINUS_DST_ALPHA,[Il]:i.CONSTANT_COLOR,[Ul]:i.ONE_MINUS_CONSTANT_COLOR,[Nl]:i.CONSTANT_ALPHA,[Fl]:i.ONE_MINUS_CONSTANT_ALPHA};function He(R,J,G,re,ce,ee,Me,_e,Xe,De){if(R===xn){m===!0&&(xe(i.BLEND),m=!1);return}if(m===!1&&(ne(i.BLEND),m=!0),R!==vl){if(R!==u||De!==C){if((w!==di||T!==di)&&(i.blendEquation(i.FUNC_ADD),w=di,T=di),De)switch(R){case Ci:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ta:i.blendFunc(i.ONE,i.ONE);break;case Aa:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case wa:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Ke("WebGLState: Invalid blending: ",R);break}else switch(R){case Ci:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ta:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Aa:Ke("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case wa:Ke("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ke("WebGLState: Invalid blending: ",R);break}U=null,M=null,y=null,P=null,_.set(0,0,0),E=0,u=R,C=De}return}ce=ce||J,ee=ee||G,Me=Me||re,(J!==w||ce!==T)&&(i.blendEquationSeparate(ct[J],ct[ce]),w=J,T=ce),(G!==U||re!==M||ee!==y||Me!==P)&&(i.blendFuncSeparate(ze[G],ze[re],ze[ee],ze[Me]),U=G,M=re,y=ee,P=Me),(_e.equals(_)===!1||Xe!==E)&&(i.blendColor(_e.r,_e.g,_e.b,Xe),_.copy(_e),E=Xe),u=R,C=!1}function nt(R,J){R.side===gn?xe(i.CULL_FACE):ne(i.CULL_FACE);let G=R.side===Ot;J&&(G=!G),Ue(G),R.blending===Ci&&R.transparent===!1?He(xn):He(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.blendColor,R.blendAlpha,R.premultipliedAlpha),a.setFunc(R.depthFunc),a.setTest(R.depthTest),a.setMask(R.depthWrite),s.setMask(R.colorWrite);const re=R.stencilWrite;o.setTest(re),re&&(o.setMask(R.stencilWriteMask),o.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),o.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass)),wt(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits),R.alphaToCoverage===!0?ne(i.SAMPLE_ALPHA_TO_COVERAGE):xe(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ue(R){F!==R&&(R?i.frontFace(i.CW):i.frontFace(i.CCW),F=R)}function st(R){R!==gl?(ne(i.CULL_FACE),R!==O&&(R===ba?i.cullFace(i.BACK):R===_l?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):xe(i.CULL_FACE),O=R}function gt(R){R!==z&&(Z&&i.lineWidth(R),z=R)}function wt(R,J,G){R?(ne(i.POLYGON_OFFSET_FILL),(I!==J||X!==G)&&(I=J,X=G,a.getReversed()&&(J=-J),i.polygonOffset(J,G))):xe(i.POLYGON_OFFSET_FILL)}function at(R){R?ne(i.SCISSOR_TEST):xe(i.SCISSOR_TEST)}function ht(R){R===void 0&&(R=i.TEXTURE0+Q-1),te!==R&&(i.activeTexture(R),te=R)}function N(R,J,G){G===void 0&&(te===null?G=i.TEXTURE0+Q-1:G=te);let re=ae[G];re===void 0&&(re={type:void 0,texture:void 0},ae[G]=re),(re.type!==R||re.texture!==J)&&(te!==G&&(i.activeTexture(G),te=G),i.bindTexture(R,J||$[R]),re.type=R,re.texture=J)}function St(){const R=ae[te];R!==void 0&&R.type!==void 0&&(i.bindTexture(R.type,null),R.type=void 0,R.texture=void 0)}function Ze(){try{i.compressedTexImage2D(...arguments)}catch(R){Ke("WebGLState:",R)}}function b(){try{i.compressedTexImage3D(...arguments)}catch(R){Ke("WebGLState:",R)}}function f(){try{i.texSubImage2D(...arguments)}catch(R){Ke("WebGLState:",R)}}function B(){try{i.texSubImage3D(...arguments)}catch(R){Ke("WebGLState:",R)}}function W(){try{i.compressedTexSubImage2D(...arguments)}catch(R){Ke("WebGLState:",R)}}function K(){try{i.compressedTexSubImage3D(...arguments)}catch(R){Ke("WebGLState:",R)}}function ue(){try{i.texStorage2D(...arguments)}catch(R){Ke("WebGLState:",R)}}function he(){try{i.texStorage3D(...arguments)}catch(R){Ke("WebGLState:",R)}}function S(){try{i.texImage2D(...arguments)}catch(R){Ke("WebGLState:",R)}}function L(){try{i.texImage3D(...arguments)}catch(R){Ke("WebGLState:",R)}}function j(R){return p[R]!==void 0?p[R]:i.getParameter(R)}function de(R,J){p[R]!==J&&(i.pixelStorei(R,J),p[R]=J)}function se(R){tt.equals(R)===!1&&(i.scissor(R.x,R.y,R.z,R.w),tt.copy(R))}function ie(R){Ne.equals(R)===!1&&(i.viewport(R.x,R.y,R.z,R.w),Ne.copy(R))}function fe(R,J){let G=l.get(J);G===void 0&&(G=new WeakMap,l.set(J,G));let re=G.get(R);re===void 0&&(re=i.getUniformBlockIndex(J,R.name),G.set(R,re))}function Ee(R,J){const re=l.get(J).get(R);c.get(J)!==re&&(i.uniformBlockBinding(J,re,R.__bindingPointIndex),c.set(J,re))}function be(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},p={},te=null,ae={},d={},g=new WeakMap,v=[],A=null,m=!1,u=null,w=null,U=null,M=null,T=null,y=null,P=null,_=new $e(0,0,0),E=0,C=!1,F=null,O=null,z=null,I=null,X=null,tt.set(0,0,i.canvas.width,i.canvas.height),Ne.set(0,0,i.canvas.width,i.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:ne,disable:xe,bindFramebuffer:Le,drawBuffers:ve,useProgram:Fe,setBlending:He,setMaterial:nt,setFlipSided:Ue,setCullFace:st,setLineWidth:gt,setPolygonOffset:wt,setScissorTest:at,activeTexture:ht,bindTexture:N,unbindTexture:St,compressedTexImage2D:Ze,compressedTexImage3D:b,texImage2D:S,texImage3D:L,pixelStorei:de,getParameter:j,updateUBOMapping:fe,uniformBlockBinding:Ee,texStorage2D:ue,texStorage3D:he,texSubImage2D:f,texSubImage3D:B,compressedTexSubImage2D:W,compressedTexSubImage3D:K,scissor:se,viewport:ie,reset:be}}function Ap(i,e,t,n,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new We,h=new WeakMap,p=new Set;let d;const g=new WeakMap;let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function A(b,f){return v?new OffscreenCanvas(b,f):br("canvas")}function m(b,f,B){let W=1;const K=Ze(b);if((K.width>B||K.height>B)&&(W=B/Math.max(K.width,K.height)),W<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const ue=Math.floor(W*K.width),he=Math.floor(W*K.height);d===void 0&&(d=A(ue,he));const S=f?A(ue,he):d;return S.width=ue,S.height=he,S.getContext("2d").drawImage(b,0,0,ue,he),Pe("WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+ue+"x"+he+")."),S}else return"data"in b&&Pe("WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),b;return b}function u(b){return b.generateMipmaps}function w(b){i.generateMipmap(b)}function U(b){return b.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?i.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function M(b,f,B,W,K,ue=!1){if(b!==null){if(i[b]!==void 0)return i[b];Pe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let he;W&&(he=e.get("EXT_texture_norm16"),he||Pe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let S=f;if(f===i.RED&&(B===i.FLOAT&&(S=i.R32F),B===i.HALF_FLOAT&&(S=i.R16F),B===i.UNSIGNED_BYTE&&(S=i.R8),B===i.UNSIGNED_SHORT&&he&&(S=he.R16_EXT),B===i.SHORT&&he&&(S=he.R16_SNORM_EXT)),f===i.RED_INTEGER&&(B===i.UNSIGNED_BYTE&&(S=i.R8UI),B===i.UNSIGNED_SHORT&&(S=i.R16UI),B===i.UNSIGNED_INT&&(S=i.R32UI),B===i.BYTE&&(S=i.R8I),B===i.SHORT&&(S=i.R16I),B===i.INT&&(S=i.R32I)),f===i.RG&&(B===i.FLOAT&&(S=i.RG32F),B===i.HALF_FLOAT&&(S=i.RG16F),B===i.UNSIGNED_BYTE&&(S=i.RG8),B===i.UNSIGNED_SHORT&&he&&(S=he.RG16_EXT),B===i.SHORT&&he&&(S=he.RG16_SNORM_EXT)),f===i.RG_INTEGER&&(B===i.UNSIGNED_BYTE&&(S=i.RG8UI),B===i.UNSIGNED_SHORT&&(S=i.RG16UI),B===i.UNSIGNED_INT&&(S=i.RG32UI),B===i.BYTE&&(S=i.RG8I),B===i.SHORT&&(S=i.RG16I),B===i.INT&&(S=i.RG32I)),f===i.RGB_INTEGER&&(B===i.UNSIGNED_BYTE&&(S=i.RGB8UI),B===i.UNSIGNED_SHORT&&(S=i.RGB16UI),B===i.UNSIGNED_INT&&(S=i.RGB32UI),B===i.BYTE&&(S=i.RGB8I),B===i.SHORT&&(S=i.RGB16I),B===i.INT&&(S=i.RGB32I)),f===i.RGBA_INTEGER&&(B===i.UNSIGNED_BYTE&&(S=i.RGBA8UI),B===i.UNSIGNED_SHORT&&(S=i.RGBA16UI),B===i.UNSIGNED_INT&&(S=i.RGBA32UI),B===i.BYTE&&(S=i.RGBA8I),B===i.SHORT&&(S=i.RGBA16I),B===i.INT&&(S=i.RGBA32I)),f===i.RGB&&(B===i.UNSIGNED_SHORT&&he&&(S=he.RGB16_EXT),B===i.SHORT&&he&&(S=he.RGB16_SNORM_EXT),B===i.UNSIGNED_INT_5_9_9_9_REV&&(S=i.RGB9_E5),B===i.UNSIGNED_INT_10F_11F_11F_REV&&(S=i.R11F_G11F_B10F)),f===i.RGBA){const L=ue?yr:Ve.getTransfer(K);B===i.FLOAT&&(S=i.RGBA32F),B===i.HALF_FLOAT&&(S=i.RGBA16F),B===i.UNSIGNED_BYTE&&(S=L===et?i.SRGB8_ALPHA8:i.RGBA8),B===i.UNSIGNED_SHORT&&he&&(S=he.RGBA16_EXT),B===i.SHORT&&he&&(S=he.RGBA16_SNORM_EXT),B===i.UNSIGNED_SHORT_4_4_4_4&&(S=i.RGBA4),B===i.UNSIGNED_SHORT_5_5_5_1&&(S=i.RGB5_A1)}return(S===i.R16F||S===i.R32F||S===i.RG16F||S===i.RG32F||S===i.RGBA16F||S===i.RGBA32F)&&e.get("EXT_color_buffer_float"),S}function T(b,f){let B;return b?f===null||f===ln||f===Ui?B=i.DEPTH24_STENCIL8:f===sn?B=i.DEPTH32F_STENCIL8:f===Ii&&(B=i.DEPTH24_STENCIL8,Pe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):f===null||f===ln||f===Ui?B=i.DEPTH_COMPONENT24:f===sn?B=i.DEPTH_COMPONENT32F:f===Ii&&(B=i.DEPTH_COMPONENT16),B}function y(b,f){return u(b)===!0||b.isFramebufferTexture&&b.minFilter!==At&&b.minFilter!==Lt?Math.log2(Math.max(f.width,f.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?f.mipmaps.length:1}function P(b){const f=b.target;f.removeEventListener("dispose",P),E(f),f.isVideoTexture&&h.delete(f),f.isHTMLTexture&&p.delete(f)}function _(b){const f=b.target;f.removeEventListener("dispose",_),F(f)}function E(b){const f=n.get(b);if(f.__webglInit===void 0)return;const B=b.source,W=g.get(B);if(W){const K=W[f.__cacheKey];K.usedTimes--,K.usedTimes===0&&C(b),Object.keys(W).length===0&&g.delete(B)}n.remove(b)}function C(b){const f=n.get(b);i.deleteTexture(f.__webglTexture);const B=b.source,W=g.get(B);delete W[f.__cacheKey],a.memory.textures--}function F(b){const f=n.get(b);if(b.depthTexture&&(b.depthTexture.dispose(),n.remove(b.depthTexture)),b.isWebGLCubeRenderTarget)for(let W=0;W<6;W++){if(Array.isArray(f.__webglFramebuffer[W]))for(let K=0;K<f.__webglFramebuffer[W].length;K++)i.deleteFramebuffer(f.__webglFramebuffer[W][K]);else i.deleteFramebuffer(f.__webglFramebuffer[W]);f.__webglDepthbuffer&&i.deleteRenderbuffer(f.__webglDepthbuffer[W])}else{if(Array.isArray(f.__webglFramebuffer))for(let W=0;W<f.__webglFramebuffer.length;W++)i.deleteFramebuffer(f.__webglFramebuffer[W]);else i.deleteFramebuffer(f.__webglFramebuffer);if(f.__webglDepthbuffer&&i.deleteRenderbuffer(f.__webglDepthbuffer),f.__webglMultisampledFramebuffer&&i.deleteFramebuffer(f.__webglMultisampledFramebuffer),f.__webglColorRenderbuffer)for(let W=0;W<f.__webglColorRenderbuffer.length;W++)f.__webglColorRenderbuffer[W]&&i.deleteRenderbuffer(f.__webglColorRenderbuffer[W]);f.__webglDepthRenderbuffer&&i.deleteRenderbuffer(f.__webglDepthRenderbuffer)}const B=b.textures;for(let W=0,K=B.length;W<K;W++){const ue=n.get(B[W]);ue.__webglTexture&&(i.deleteTexture(ue.__webglTexture),a.memory.textures--),n.remove(B[W])}n.remove(b)}let O=0;function z(){O=0}function I(){return O}function X(b){O=b}function Q(){const b=O;return b>=r.maxTextures&&Pe("WebGLTextures: Trying to use "+(b+1)+" texture units while this GPU supports only "+r.maxTextures),O+=1,b}function Z(b){const f=[];return f.push(b.wrapS),f.push(b.wrapT),f.push(b.wrapR||0),f.push(b.magFilter),f.push(b.minFilter),f.push(b.anisotropy),f.push(b.internalFormat),f.push(b.format),f.push(b.type),f.push(b.generateMipmaps),f.push(b.premultiplyAlpha),f.push(b.flipY),f.push(b.unpackAlignment),f.push(b.colorSpace),f.join()}function oe(b,f){const B=n.get(b);if(b.isVideoTexture&&N(b),b.isRenderTargetTexture===!1&&b.isExternalTexture!==!0&&b.version>0&&B.__version!==b.version){const W=b.image;if(W===null)Pe("WebGLRenderer: Texture marked for update but no image data found.");else if(W.complete===!1)Pe("WebGLRenderer: Texture marked for update but image is incomplete");else{xe(B,b,f);return}}else b.isExternalTexture&&(B.__webglTexture=b.sourceTexture?b.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,B.__webglTexture,i.TEXTURE0+f)}function Y(b,f){const B=n.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&B.__version!==b.version){xe(B,b,f);return}else b.isExternalTexture&&(B.__webglTexture=b.sourceTexture?b.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,B.__webglTexture,i.TEXTURE0+f)}function te(b,f){const B=n.get(b);if(b.isRenderTargetTexture===!1&&b.version>0&&B.__version!==b.version){xe(B,b,f);return}t.bindTexture(i.TEXTURE_3D,B.__webglTexture,i.TEXTURE0+f)}function ae(b,f){const B=n.get(b);if(b.isCubeDepthTexture!==!0&&b.version>0&&B.__version!==b.version){Le(B,b,f);return}t.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture,i.TEXTURE0+f)}const Ce={[xs]:i.REPEAT,[_n]:i.CLAMP_TO_EDGE,[vs]:i.MIRRORED_REPEAT},we={[At]:i.NEAREST,[zl]:i.NEAREST_MIPMAP_NEAREST,[Xi]:i.NEAREST_MIPMAP_LINEAR,[Lt]:i.LINEAR,[Dr]:i.LINEAR_MIPMAP_NEAREST,[Gn]:i.LINEAR_MIPMAP_LINEAR},tt={[kl]:i.NEVER,[$l]:i.ALWAYS,[Wl]:i.LESS,[oa]:i.LEQUAL,[Xl]:i.EQUAL,[la]:i.GEQUAL,[ql]:i.GREATER,[Yl]:i.NOTEQUAL};function Ne(b,f){if(f.type===sn&&e.has("OES_texture_float_linear")===!1&&(f.magFilter===Lt||f.magFilter===Dr||f.magFilter===Xi||f.magFilter===Gn||f.minFilter===Lt||f.minFilter===Dr||f.minFilter===Xi||f.minFilter===Gn)&&Pe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(b,i.TEXTURE_WRAP_S,Ce[f.wrapS]),i.texParameteri(b,i.TEXTURE_WRAP_T,Ce[f.wrapT]),(b===i.TEXTURE_3D||b===i.TEXTURE_2D_ARRAY)&&i.texParameteri(b,i.TEXTURE_WRAP_R,Ce[f.wrapR]),i.texParameteri(b,i.TEXTURE_MAG_FILTER,we[f.magFilter]),i.texParameteri(b,i.TEXTURE_MIN_FILTER,we[f.minFilter]),f.compareFunction&&(i.texParameteri(b,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(b,i.TEXTURE_COMPARE_FUNC,tt[f.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(f.magFilter===At||f.minFilter!==Xi&&f.minFilter!==Gn||f.type===sn&&e.has("OES_texture_float_linear")===!1)return;if(f.anisotropy>1||n.get(f).__currentAnisotropy){const B=e.get("EXT_texture_filter_anisotropic");i.texParameterf(b,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(f.anisotropy,r.getMaxAnisotropy())),n.get(f).__currentAnisotropy=f.anisotropy}}}function qe(b,f){let B=!1;b.__webglInit===void 0&&(b.__webglInit=!0,f.addEventListener("dispose",P));const W=f.source;let K=g.get(W);K===void 0&&(K={},g.set(W,K));const ue=Z(f);if(ue!==b.__cacheKey){K[ue]===void 0&&(K[ue]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,B=!0),K[ue].usedTimes++;const he=K[b.__cacheKey];he!==void 0&&(K[b.__cacheKey].usedTimes--,he.usedTimes===0&&C(f)),b.__cacheKey=ue,b.__webglTexture=K[ue].texture}return B}function $(b,f,B){return Math.floor(Math.floor(b/B)/f)}function ne(b,f,B,W){const ue=b.updateRanges;if(ue.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,f.width,f.height,B,W,f.data);else{ue.sort((de,se)=>de.start-se.start);let he=0;for(let de=1;de<ue.length;de++){const se=ue[he],ie=ue[de],fe=se.start+se.count,Ee=$(ie.start,f.width,4),be=$(se.start,f.width,4);ie.start<=fe+1&&Ee===be&&$(ie.start+ie.count-1,f.width,4)===Ee?se.count=Math.max(se.count,ie.start+ie.count-se.start):(++he,ue[he]=ie)}ue.length=he+1;const S=t.getParameter(i.UNPACK_ROW_LENGTH),L=t.getParameter(i.UNPACK_SKIP_PIXELS),j=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,f.width);for(let de=0,se=ue.length;de<se;de++){const ie=ue[de],fe=Math.floor(ie.start/4),Ee=Math.ceil(ie.count/4),be=fe%f.width,R=Math.floor(fe/f.width),J=Ee,G=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,be),t.pixelStorei(i.UNPACK_SKIP_ROWS,R),t.texSubImage2D(i.TEXTURE_2D,0,be,R,J,G,B,W,f.data)}b.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,S),t.pixelStorei(i.UNPACK_SKIP_PIXELS,L),t.pixelStorei(i.UNPACK_SKIP_ROWS,j)}}function xe(b,f,B){let W=i.TEXTURE_2D;(f.isDataArrayTexture||f.isCompressedArrayTexture)&&(W=i.TEXTURE_2D_ARRAY),f.isData3DTexture&&(W=i.TEXTURE_3D);const K=qe(b,f),ue=f.source;t.bindTexture(W,b.__webglTexture,i.TEXTURE0+B);const he=n.get(ue);if(ue.version!==he.__version||K===!0){if(t.activeTexture(i.TEXTURE0+B),(typeof ImageBitmap<"u"&&f.image instanceof ImageBitmap)===!1){const G=Ve.getPrimaries(Ve.workingColorSpace),re=f.colorSpace===Ln?null:Ve.getPrimaries(f.colorSpace),ce=f.colorSpace===Ln||G===re?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,f.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,f.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ce)}t.pixelStorei(i.UNPACK_ALIGNMENT,f.unpackAlignment);let L=m(f.image,!1,r.maxTextureSize);L=St(f,L);const j=s.convert(f.format,f.colorSpace),de=s.convert(f.type);let se=M(f.internalFormat,j,de,f.normalized,f.colorSpace,f.isVideoTexture);Ne(W,f);let ie;const fe=f.mipmaps,Ee=f.isVideoTexture!==!0,be=he.__version===void 0||K===!0,R=ue.dataReady,J=y(f,L);if(f.isDepthTexture)se=T(f.format===Hn,f.type),be&&(Ee?t.texStorage2D(i.TEXTURE_2D,1,se,L.width,L.height):t.texImage2D(i.TEXTURE_2D,0,se,L.width,L.height,0,j,de,null));else if(f.isDataTexture)if(fe.length>0){Ee&&be&&t.texStorage2D(i.TEXTURE_2D,J,se,fe[0].width,fe[0].height);for(let G=0,re=fe.length;G<re;G++)ie=fe[G],Ee?R&&t.texSubImage2D(i.TEXTURE_2D,G,0,0,ie.width,ie.height,j,de,ie.data):t.texImage2D(i.TEXTURE_2D,G,se,ie.width,ie.height,0,j,de,ie.data);f.generateMipmaps=!1}else Ee?(be&&t.texStorage2D(i.TEXTURE_2D,J,se,L.width,L.height),R&&ne(f,L,j,de)):t.texImage2D(i.TEXTURE_2D,0,se,L.width,L.height,0,j,de,L.data);else if(f.isCompressedTexture)if(f.isCompressedArrayTexture){Ee&&be&&t.texStorage3D(i.TEXTURE_2D_ARRAY,J,se,fe[0].width,fe[0].height,L.depth);for(let G=0,re=fe.length;G<re;G++)if(ie=fe[G],f.format!==Jt)if(j!==null)if(Ee){if(R)if(f.layerUpdates.size>0){const ce=Qa(ie.width,ie.height,f.format,f.type);for(const ee of f.layerUpdates){const Me=ie.data.subarray(ee*ce/ie.data.BYTES_PER_ELEMENT,(ee+1)*ce/ie.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,G,0,0,ee,ie.width,ie.height,1,j,Me)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,G,0,0,0,ie.width,ie.height,L.depth,j,ie.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,G,se,ie.width,ie.height,L.depth,0,ie.data,0,0);else Pe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ee?R&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,G,0,0,0,ie.width,ie.height,L.depth,j,de,ie.data):t.texImage3D(i.TEXTURE_2D_ARRAY,G,se,ie.width,ie.height,L.depth,0,j,de,ie.data);f.layerUpdates.size>0&&f.clearLayerUpdates()}else{Ee&&be&&t.texStorage2D(i.TEXTURE_2D,J,se,fe[0].width,fe[0].height);for(let G=0,re=fe.length;G<re;G++)ie=fe[G],f.format!==Jt?j!==null?Ee?R&&t.compressedTexSubImage2D(i.TEXTURE_2D,G,0,0,ie.width,ie.height,j,ie.data):t.compressedTexImage2D(i.TEXTURE_2D,G,se,ie.width,ie.height,0,ie.data):Pe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ee?R&&t.texSubImage2D(i.TEXTURE_2D,G,0,0,ie.width,ie.height,j,de,ie.data):t.texImage2D(i.TEXTURE_2D,G,se,ie.width,ie.height,0,j,de,ie.data)}else if(f.isDataArrayTexture)if(Ee){if(be&&t.texStorage3D(i.TEXTURE_2D_ARRAY,J,se,L.width,L.height,L.depth),R)if(f.layerUpdates.size>0){const G=Qa(L.width,L.height,f.format,f.type);for(const re of f.layerUpdates){const ce=L.data.subarray(re*G/L.data.BYTES_PER_ELEMENT,(re+1)*G/L.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,re,L.width,L.height,1,j,de,ce)}f.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,L.width,L.height,L.depth,j,de,L.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,se,L.width,L.height,L.depth,0,j,de,L.data);else if(f.isData3DTexture)Ee?(be&&t.texStorage3D(i.TEXTURE_3D,J,se,L.width,L.height,L.depth),R&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,L.width,L.height,L.depth,j,de,L.data)):t.texImage3D(i.TEXTURE_3D,0,se,L.width,L.height,L.depth,0,j,de,L.data);else if(f.isFramebufferTexture){if(be)if(Ee)t.texStorage2D(i.TEXTURE_2D,J,se,L.width,L.height);else{let G=L.width,re=L.height;for(let ce=0;ce<J;ce++)t.texImage2D(i.TEXTURE_2D,ce,se,G,re,0,j,de,null),G>>=1,re>>=1}}else if(f.isHTMLTexture){if("texElementImage2D"in i){const G=i.canvas;if(G.hasAttribute("layoutsubtree")||G.setAttribute("layoutsubtree","true"),L.parentNode!==G){G.appendChild(L),p.add(f),G.onpaint=re=>{const ce=re.changedElements;for(const ee of p)ce.includes(ee.image)&&(ee.needsUpdate=!0)},G.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,L);else{const ce=i.RGBA,ee=i.RGBA,Me=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,ce,ee,Me,L)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(fe.length>0){if(Ee&&be){const G=Ze(fe[0]);t.texStorage2D(i.TEXTURE_2D,J,se,G.width,G.height)}for(let G=0,re=fe.length;G<re;G++)ie=fe[G],Ee?R&&t.texSubImage2D(i.TEXTURE_2D,G,0,0,j,de,ie):t.texImage2D(i.TEXTURE_2D,G,se,j,de,ie);f.generateMipmaps=!1}else if(Ee){if(be){const G=Ze(L);t.texStorage2D(i.TEXTURE_2D,J,se,G.width,G.height)}R&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,j,de,L)}else t.texImage2D(i.TEXTURE_2D,0,se,j,de,L);u(f)&&w(W),he.__version=ue.version,f.onUpdate&&f.onUpdate(f)}b.__version=f.version}function Le(b,f,B){if(f.image.length!==6)return;const W=qe(b,f),K=f.source;t.bindTexture(i.TEXTURE_CUBE_MAP,b.__webglTexture,i.TEXTURE0+B);const ue=n.get(K);if(K.version!==ue.__version||W===!0){t.activeTexture(i.TEXTURE0+B);const he=Ve.getPrimaries(Ve.workingColorSpace),S=f.colorSpace===Ln?null:Ve.getPrimaries(f.colorSpace),L=f.colorSpace===Ln||he===S?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,f.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,f.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,f.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,L);const j=f.isCompressedTexture||f.image[0].isCompressedTexture,de=f.image[0]&&f.image[0].isDataTexture,se=[];for(let ee=0;ee<6;ee++)!j&&!de?se[ee]=m(f.image[ee],!0,r.maxCubemapSize):se[ee]=de?f.image[ee].image:f.image[ee],se[ee]=St(f,se[ee]);const ie=se[0],fe=s.convert(f.format,f.colorSpace),Ee=s.convert(f.type),be=M(f.internalFormat,fe,Ee,f.normalized,f.colorSpace),R=f.isVideoTexture!==!0,J=ue.__version===void 0||W===!0,G=K.dataReady;let re=y(f,ie);Ne(i.TEXTURE_CUBE_MAP,f);let ce;if(j){R&&J&&t.texStorage2D(i.TEXTURE_CUBE_MAP,re,be,ie.width,ie.height);for(let ee=0;ee<6;ee++){ce=se[ee].mipmaps;for(let Me=0;Me<ce.length;Me++){const _e=ce[Me];f.format!==Jt?fe!==null?R?G&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Me,0,0,_e.width,_e.height,fe,_e.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Me,be,_e.width,_e.height,0,_e.data):Pe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):R?G&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Me,0,0,_e.width,_e.height,fe,Ee,_e.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Me,be,_e.width,_e.height,0,fe,Ee,_e.data)}}}else{if(ce=f.mipmaps,R&&J){ce.length>0&&re++;const ee=Ze(se[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,re,be,ee.width,ee.height)}for(let ee=0;ee<6;ee++)if(de){R?G&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,se[ee].width,se[ee].height,fe,Ee,se[ee].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,be,se[ee].width,se[ee].height,0,fe,Ee,se[ee].data);for(let Me=0;Me<ce.length;Me++){const Xe=ce[Me].image[ee].image;R?G&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Me+1,0,0,Xe.width,Xe.height,fe,Ee,Xe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Me+1,be,Xe.width,Xe.height,0,fe,Ee,Xe.data)}}else{R?G&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,fe,Ee,se[ee]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,be,fe,Ee,se[ee]);for(let Me=0;Me<ce.length;Me++){const _e=ce[Me];R?G&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Me+1,0,0,fe,Ee,_e.image[ee]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Me+1,be,fe,Ee,_e.image[ee])}}}u(f)&&w(i.TEXTURE_CUBE_MAP),ue.__version=K.version,f.onUpdate&&f.onUpdate(f)}b.__version=f.version}function ve(b,f,B,W,K,ue){const he=s.convert(B.format,B.colorSpace),S=s.convert(B.type),L=M(B.internalFormat,he,S,B.normalized,B.colorSpace),j=n.get(f),de=n.get(B);if(de.__renderTarget=f,!j.__hasExternalTextures){const se=Math.max(1,f.width>>ue),ie=Math.max(1,f.height>>ue);K===i.TEXTURE_3D||K===i.TEXTURE_2D_ARRAY?t.texImage3D(K,ue,L,se,ie,f.depth,0,he,S,null):t.texImage2D(K,ue,L,se,ie,0,he,S,null)}t.bindFramebuffer(i.FRAMEBUFFER,b),ht(f)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,W,K,de.__webglTexture,0,at(f)):(K===i.TEXTURE_2D||K>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,W,K,de.__webglTexture,ue),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Fe(b,f,B){if(i.bindRenderbuffer(i.RENDERBUFFER,b),f.depthBuffer){const W=f.depthTexture,K=W&&W.isDepthTexture?W.type:null,ue=T(f.stencilBuffer,K),he=f.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;ht(f)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,at(f),ue,f.width,f.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,at(f),ue,f.width,f.height):i.renderbufferStorage(i.RENDERBUFFER,ue,f.width,f.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,he,i.RENDERBUFFER,b)}else{const W=f.textures;for(let K=0;K<W.length;K++){const ue=W[K],he=s.convert(ue.format,ue.colorSpace),S=s.convert(ue.type),L=M(ue.internalFormat,he,S,ue.normalized,ue.colorSpace);ht(f)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,at(f),L,f.width,f.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,at(f),L,f.width,f.height):i.renderbufferStorage(i.RENDERBUFFER,L,f.width,f.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ct(b,f,B){const W=f.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,b),!(f.depthTexture&&f.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const K=n.get(f.depthTexture);if(K.__renderTarget=f,(!K.__webglTexture||f.depthTexture.image.width!==f.width||f.depthTexture.image.height!==f.height)&&(f.depthTexture.image.width=f.width,f.depthTexture.image.height=f.height,f.depthTexture.needsUpdate=!0),W){if(K.__webglInit===void 0&&(K.__webglInit=!0,f.depthTexture.addEventListener("dispose",P)),K.__webglTexture===void 0){K.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture),Ne(i.TEXTURE_CUBE_MAP,f.depthTexture);const j=s.convert(f.depthTexture.format),de=s.convert(f.depthTexture.type);let se;f.depthTexture.format===Sn?se=i.DEPTH_COMPONENT24:f.depthTexture.format===Hn&&(se=i.DEPTH24_STENCIL8);for(let ie=0;ie<6;ie++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,se,f.width,f.height,0,j,de,null)}}else oe(f.depthTexture,0);const ue=K.__webglTexture,he=at(f),S=W?i.TEXTURE_CUBE_MAP_POSITIVE_X+B:i.TEXTURE_2D,L=f.depthTexture.format===Hn?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(f.depthTexture.format===Sn)ht(f)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,L,S,ue,0,he):i.framebufferTexture2D(i.FRAMEBUFFER,L,S,ue,0);else if(f.depthTexture.format===Hn)ht(f)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,L,S,ue,0,he):i.framebufferTexture2D(i.FRAMEBUFFER,L,S,ue,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ze(b){const f=n.get(b),B=b.isWebGLCubeRenderTarget===!0;if(f.__boundDepthTexture!==b.depthTexture){const W=b.depthTexture;if(f.__depthDisposeCallback&&f.__depthDisposeCallback(),W){const K=()=>{delete f.__boundDepthTexture,delete f.__depthDisposeCallback,W.removeEventListener("dispose",K)};W.addEventListener("dispose",K),f.__depthDisposeCallback=K}f.__boundDepthTexture=W}if(b.depthTexture&&!f.__autoAllocateDepthBuffer)if(B)for(let W=0;W<6;W++)ct(f.__webglFramebuffer[W],b,W);else{const W=b.texture.mipmaps;W&&W.length>0?ct(f.__webglFramebuffer[0],b,0):ct(f.__webglFramebuffer,b,0)}else if(B){f.__webglDepthbuffer=[];for(let W=0;W<6;W++)if(t.bindFramebuffer(i.FRAMEBUFFER,f.__webglFramebuffer[W]),f.__webglDepthbuffer[W]===void 0)f.__webglDepthbuffer[W]=i.createRenderbuffer(),Fe(f.__webglDepthbuffer[W],b,!1);else{const K=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ue=f.__webglDepthbuffer[W];i.bindRenderbuffer(i.RENDERBUFFER,ue),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,ue)}}else{const W=b.texture.mipmaps;if(W&&W.length>0?t.bindFramebuffer(i.FRAMEBUFFER,f.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,f.__webglFramebuffer),f.__webglDepthbuffer===void 0)f.__webglDepthbuffer=i.createRenderbuffer(),Fe(f.__webglDepthbuffer,b,!1);else{const K=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ue=f.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ue),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,ue)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function He(b,f,B){const W=n.get(b);f!==void 0&&ve(W.__webglFramebuffer,b,b.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),B!==void 0&&ze(b)}function nt(b){const f=b.texture,B=n.get(b),W=n.get(f);b.addEventListener("dispose",_);const K=b.textures,ue=b.isWebGLCubeRenderTarget===!0,he=K.length>1;if(he||(W.__webglTexture===void 0&&(W.__webglTexture=i.createTexture()),W.__version=f.version,a.memory.textures++),ue){B.__webglFramebuffer=[];for(let S=0;S<6;S++)if(f.mipmaps&&f.mipmaps.length>0){B.__webglFramebuffer[S]=[];for(let L=0;L<f.mipmaps.length;L++)B.__webglFramebuffer[S][L]=i.createFramebuffer()}else B.__webglFramebuffer[S]=i.createFramebuffer()}else{if(f.mipmaps&&f.mipmaps.length>0){B.__webglFramebuffer=[];for(let S=0;S<f.mipmaps.length;S++)B.__webglFramebuffer[S]=i.createFramebuffer()}else B.__webglFramebuffer=i.createFramebuffer();if(he)for(let S=0,L=K.length;S<L;S++){const j=n.get(K[S]);j.__webglTexture===void 0&&(j.__webglTexture=i.createTexture(),a.memory.textures++)}if(b.samples>0&&ht(b)===!1){B.__webglMultisampledFramebuffer=i.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let S=0;S<K.length;S++){const L=K[S];B.__webglColorRenderbuffer[S]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,B.__webglColorRenderbuffer[S]);const j=s.convert(L.format,L.colorSpace),de=s.convert(L.type),se=M(L.internalFormat,j,de,L.normalized,L.colorSpace,b.isXRRenderTarget===!0),ie=at(b);i.renderbufferStorageMultisample(i.RENDERBUFFER,ie,se,b.width,b.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+S,i.RENDERBUFFER,B.__webglColorRenderbuffer[S])}i.bindRenderbuffer(i.RENDERBUFFER,null),b.depthBuffer&&(B.__webglDepthRenderbuffer=i.createRenderbuffer(),Fe(B.__webglDepthRenderbuffer,b,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ue){t.bindTexture(i.TEXTURE_CUBE_MAP,W.__webglTexture),Ne(i.TEXTURE_CUBE_MAP,f);for(let S=0;S<6;S++)if(f.mipmaps&&f.mipmaps.length>0)for(let L=0;L<f.mipmaps.length;L++)ve(B.__webglFramebuffer[S][L],b,f,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+S,L);else ve(B.__webglFramebuffer[S],b,f,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+S,0);u(f)&&w(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(he){for(let S=0,L=K.length;S<L;S++){const j=K[S],de=n.get(j);let se=i.TEXTURE_2D;(b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(se=b.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(se,de.__webglTexture),Ne(se,j),ve(B.__webglFramebuffer,b,j,i.COLOR_ATTACHMENT0+S,se,0),u(j)&&w(se)}t.unbindTexture()}else{let S=i.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(S=b.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(S,W.__webglTexture),Ne(S,f),f.mipmaps&&f.mipmaps.length>0)for(let L=0;L<f.mipmaps.length;L++)ve(B.__webglFramebuffer[L],b,f,i.COLOR_ATTACHMENT0,S,L);else ve(B.__webglFramebuffer,b,f,i.COLOR_ATTACHMENT0,S,0);u(f)&&w(S),t.unbindTexture()}b.depthBuffer&&ze(b)}function Ue(b){const f=b.textures;for(let B=0,W=f.length;B<W;B++){const K=f[B];if(u(K)){const ue=U(b),he=n.get(K).__webglTexture;t.bindTexture(ue,he),w(ue),t.unbindTexture()}}}const st=[],gt=[];function wt(b){if(b.samples>0){if(ht(b)===!1){const f=b.textures,B=b.width,W=b.height;let K=i.COLOR_BUFFER_BIT;const ue=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,he=n.get(b),S=f.length>1;if(S)for(let j=0;j<f.length;j++)t.bindFramebuffer(i.FRAMEBUFFER,he.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+j,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,he.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+j,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,he.__webglMultisampledFramebuffer);const L=b.texture.mipmaps;L&&L.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,he.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,he.__webglFramebuffer);for(let j=0;j<f.length;j++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(K|=i.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(K|=i.STENCIL_BUFFER_BIT)),S){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,he.__webglColorRenderbuffer[j]);const de=n.get(f[j]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,de,0)}i.blitFramebuffer(0,0,B,W,0,0,B,W,K,i.NEAREST),c===!0&&(st.length=0,gt.length=0,st.push(i.COLOR_ATTACHMENT0+j),b.depthBuffer&&b.storeMultisampledDepthBuffer===!1&&(st.push(ue),gt.push(ue),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,gt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,st))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),S)for(let j=0;j<f.length;j++){t.bindFramebuffer(i.FRAMEBUFFER,he.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+j,i.RENDERBUFFER,he.__webglColorRenderbuffer[j]);const de=n.get(f[j]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,he.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+j,i.TEXTURE_2D,de,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,he.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.storeMultisampledDepthBuffer===!1&&c){const f=b.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[f])}}}function at(b){return Math.min(r.maxSamples,b.samples)}function ht(b){const f=n.get(b);return b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&f.__useRenderToTexture!==!1}function N(b){const f=a.render.frame;h.get(b)!==f&&(h.set(b,f),b.update())}function St(b,f){const B=b.colorSpace,W=b.format,K=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||B!==Er&&B!==Ln&&(Ve.getTransfer(B)===et?(W!==Jt||K!==Gt)&&Pe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ke("WebGLTextures: Unsupported texture color space:",B)),f}function Ze(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(l.width=b.naturalWidth||b.width,l.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(l.width=b.displayWidth,l.height=b.displayHeight):(l.width=b.width,l.height=b.height),l}this.allocateTextureUnit=Q,this.resetTextureUnits=z,this.getTextureUnits=I,this.setTextureUnits=X,this.setTexture2D=oe,this.setTexture2DArray=Y,this.setTexture3D=te,this.setTextureCube=ae,this.rebindTextures=He,this.setupRenderTarget=nt,this.updateRenderTargetMipmap=Ue,this.updateMultisampleRenderTarget=wt,this.setupDepthRenderbuffer=ze,this.setupFrameBufferTexture=ve,this.useMultisampledRTT=ht,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function wp(i,e){function t(n,r=Ln){let s;const a=Ve.getTransfer(r);if(n===Gt)return i.UNSIGNED_BYTE;if(n===na)return i.UNSIGNED_SHORT_4_4_4_4;if(n===ia)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Ho)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Vo)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===zo)return i.BYTE;if(n===Go)return i.SHORT;if(n===Ii)return i.UNSIGNED_SHORT;if(n===ta)return i.INT;if(n===ln)return i.UNSIGNED_INT;if(n===sn)return i.FLOAT;if(n===cn)return i.HALF_FLOAT;if(n===ko)return i.ALPHA;if(n===Wo)return i.RGB;if(n===Jt)return i.RGBA;if(n===Sn)return i.DEPTH_COMPONENT;if(n===Hn)return i.DEPTH_STENCIL;if(n===Xo)return i.RED;if(n===ra)return i.RED_INTEGER;if(n===Xn)return i.RG;if(n===sa)return i.RG_INTEGER;if(n===aa)return i.RGBA_INTEGER;if(n===mr||n===gr||n===_r||n===xr)if(a===et)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===mr)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===gr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===_r)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===xr)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===mr)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===gr)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===_r)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===xr)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ms||n===Ss||n===Es||n===ys)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Ms)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Ss)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Es)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ys)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===bs||n===Ts||n===As||n===ws||n===Rs||n===Mr||n===Cs)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===bs||n===Ts)return a===et?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===As)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===ws)return s.COMPRESSED_R11_EAC;if(n===Rs)return s.COMPRESSED_SIGNED_R11_EAC;if(n===Mr)return s.COMPRESSED_RG11_EAC;if(n===Cs)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Ps||n===Ls||n===Ds||n===Is||n===Us||n===Ns||n===Fs||n===Os||n===Bs||n===zs||n===Gs||n===Hs||n===Vs||n===ks)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Ps)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ls)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ds)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Is)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Us)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ns)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Fs)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Os)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Bs)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===zs)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Gs)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Hs)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Vs)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ks)return a===et?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ws||n===Xs||n===qs)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Ws)return a===et?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Xs)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===qs)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ys||n===$s||n===Sr||n===Ks)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Ys)return s.COMPRESSED_RED_RGTC1_EXT;if(n===$s)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Sr)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ks)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ui?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const Rp=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Cp=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Pp{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new el(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new dn({vertexShader:Rp,fragmentShader:Cp,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Tt(new wr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Lp extends qn{constructor(e,t){super();const n=this;let r=null,s=1,a=null,o="local-floor",c=1,l=null,h=null,p=null,d=null,g=null,v=null;const A=typeof XRWebGLBinding<"u",m=new Pp,u={},w=t.getContextAttributes();let U=null,M=null;const T=[],y=[],P=new We;let _=null,E=null;const C=new Wt;C.viewport=new ut;const F=new Wt;F.viewport=new ut;const O=[C,F],z=new Oc;let I=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let ne=T[$];return ne===void 0&&(ne=new Hr,T[$]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function($){let ne=T[$];return ne===void 0&&(ne=new Hr,T[$]=ne),ne.getGripSpace()},this.getHand=function($){let ne=T[$];return ne===void 0&&(ne=new Hr,T[$]=ne),ne.getHandSpace()};function Q($){const ne=y.indexOf($.inputSource);if(ne===-1)return;const xe=T[ne];xe!==void 0&&(xe.update($.inputSource,$.frame,l||a),xe.dispatchEvent({type:$.type,data:$.inputSource}))}function Z(){r.removeEventListener("select",Q),r.removeEventListener("selectstart",Q),r.removeEventListener("selectend",Q),r.removeEventListener("squeeze",Q),r.removeEventListener("squeezestart",Q),r.removeEventListener("squeezeend",Q),r.removeEventListener("end",Z),r.removeEventListener("inputsourceschange",oe);for(let $=0;$<T.length;$++){const ne=y[$];ne!==null&&(y[$]=null,T[$].disconnect(ne))}I=null,X=null,m.reset();for(const $ in u)delete u[$];if(e.setRenderTarget(U),g=null,d=null,p=null,r=null,M=null,qe.stop(),n.isPresenting=!1,e.setPixelRatio(_),e.setSize(P.width,P.height,!1),E!==null){const $=E.camera;$.fov=E.fov,$.zoom=E.zoom,$.updateProjectionMatrix(),E=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){s=$,n.isPresenting===!0&&Pe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){o=$,n.isPresenting===!0&&Pe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function($){l=$},this.getBaseLayer=function(){return d!==null?d:g},this.getBinding=function(){return p===null&&A&&(p=new XRWebGLBinding(r,t)),p},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function($){if(r=$,r!==null){if(U=e.getRenderTarget(),r.addEventListener("select",Q),r.addEventListener("selectstart",Q),r.addEventListener("selectend",Q),r.addEventListener("squeeze",Q),r.addEventListener("squeezestart",Q),r.addEventListener("squeezeend",Q),r.addEventListener("end",Z),r.addEventListener("inputsourceschange",oe),w.xrCompatible!==!0&&await t.makeXRCompatible(),_=e.getPixelRatio(),e.getSize(P),A&&"createProjectionLayer"in XRWebGLBinding.prototype){let xe=null,Le=null,ve=null;w.depth&&(ve=w.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,xe=w.stencil?Hn:Sn,Le=w.stencil?Ui:ln);const Fe={colorFormat:t.RGBA8,depthFormat:ve,scaleFactor:s};p=this.getBinding(),d=p.createProjectionLayer(Fe),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),M=new Qt(d.textureWidth,d.textureHeight,{format:Jt,type:Gt,depthTexture:new Fi(d.textureWidth,d.textureHeight,Le,void 0,void 0,void 0,void 0,void 0,void 0,xe),stencilBuffer:w.stencil,colorSpace:e.outputColorSpace,samples:w.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{const xe={antialias:w.antialias,alpha:!0,depth:w.depth,stencil:w.stencil,framebufferScaleFactor:s};g=new XRWebGLLayer(r,t,xe),r.updateRenderState({baseLayer:g}),e.setPixelRatio(1),e.setSize(g.framebufferWidth,g.framebufferHeight,!1),M=new Qt(g.framebufferWidth,g.framebufferHeight,{format:Jt,type:Gt,colorSpace:e.outputColorSpace,stencilBuffer:w.stencil,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1,storeMultisampledDepthBuffer:g.ignoreDepthValues===!1,storeMultisampledStencilBuffer:g.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await r.requestReferenceSpace(o),qe.setContext(r),qe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function oe($){for(let ne=0;ne<$.removed.length;ne++){const xe=$.removed[ne],Le=y.indexOf(xe);Le>=0&&(y[Le]=null,T[Le].disconnect(xe))}for(let ne=0;ne<$.added.length;ne++){const xe=$.added[ne];let Le=y.indexOf(xe);if(Le===-1){for(let Fe=0;Fe<T.length;Fe++)if(Fe>=y.length){y.push(xe),Le=Fe;break}else if(y[Fe]===null){y[Fe]=xe,Le=Fe;break}if(Le===-1)break}const ve=T[Le];ve&&ve.connect(xe)}}const Y=new k,te=new k;function ae($,ne,xe){Y.setFromMatrixPosition(ne.matrixWorld),te.setFromMatrixPosition(xe.matrixWorld);const Le=Y.distanceTo(te),ve=ne.projectionMatrix.elements,Fe=xe.projectionMatrix.elements,ct=ve[14]/(ve[10]-1),ze=ve[14]/(ve[10]+1),He=(ve[9]+1)/ve[5],nt=(ve[9]-1)/ve[5],Ue=(ve[8]-1)/ve[0],st=(Fe[8]+1)/Fe[0],gt=ct*Ue,wt=ct*st,at=Le/(-Ue+st),ht=at*-Ue;if(ne.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(ht),$.translateZ(at),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),ve[10]===-1)$.projectionMatrix.copy(ne.projectionMatrix),$.projectionMatrixInverse.copy(ne.projectionMatrixInverse);else{const N=ct+at,St=ze+at,Ze=gt-ht,b=wt+(Le-ht),f=He*ze/St*N,B=nt*ze/St*N;$.projectionMatrix.makePerspective(Ze,b,f,B,N,St),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function Ce($,ne){ne===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(ne.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(r===null)return;let ne=$.near,xe=$.far;m.texture!==null&&(m.depthNear>0&&(ne=m.depthNear),m.depthFar>0&&(xe=m.depthFar)),z.near=F.near=C.near=ne,z.far=F.far=C.far=xe,(I!==z.near||X!==z.far)&&(r.updateRenderState({depthNear:z.near,depthFar:z.far}),I=z.near,X=z.far),z.layers.mask=$.layers.mask|6,C.layers.mask=z.layers.mask&-5,F.layers.mask=z.layers.mask&-3;const Le=$.parent,ve=z.cameras;Ce(z,Le);for(let Fe=0;Fe<ve.length;Fe++)Ce(ve[Fe],Le);ve.length===2?ae(z,C,F):z.projectionMatrix.copy(C.projectionMatrix),E===null&&$.isPerspectiveCamera&&(E={camera:$,fov:$.fov,zoom:$.zoom}),we($,z,Le)};function we($,ne,xe){xe===null?$.matrix.copy(ne.matrixWorld):($.matrix.copy(xe.matrixWorld),$.matrix.invert(),$.matrix.multiply(ne.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(ne.projectionMatrix),$.projectionMatrixInverse.copy(ne.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Js*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return z},this.getFoveation=function(){if(!(d===null&&g===null))return c},this.setFoveation=function($){c=$,d!==null&&(d.fixedFoveation=$),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=$)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(z)},this.getCameraTexture=function($){return u[$]};let tt=null;function Ne($,ne){if(h=ne.getViewerPose(l||a),v=ne,h!==null){const xe=h.views;g!==null&&(e.setRenderTargetFramebuffer(M,g.framebuffer),e.setRenderTarget(M));let Le=!1;xe.length!==z.cameras.length&&(z.cameras.length=0,Le=!0);for(let ze=0;ze<xe.length;ze++){const He=xe[ze];let nt=null;if(g!==null)nt=g.getViewport(He);else{const st=p.getViewSubImage(d,He);nt=st.viewport,ze===0&&(e.setRenderTargetTextures(M,st.colorTexture,st.depthStencilTexture),e.setRenderTarget(M))}let Ue=O[ze];Ue===void 0&&(Ue=new Wt,Ue.layers.enable(ze),Ue.viewport=new ut,O[ze]=Ue),Ue.matrix.fromArray(He.transform.matrix),Ue.matrix.decompose(Ue.position,Ue.quaternion,Ue.scale),Ue.projectionMatrix.fromArray(He.projectionMatrix),Ue.projectionMatrixInverse.copy(Ue.projectionMatrix).invert(),Ue.viewport.set(nt.x,nt.y,nt.width,nt.height),ze===0&&(z.matrix.copy(Ue.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale)),Le===!0&&z.cameras.push(Ue)}const ve=r.enabledFeatures;if(ve&&ve.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&A){p=n.getBinding();const ze=p.getDepthInformation(xe[0]);ze&&ze.isValid&&ze.texture&&m.init(ze,r.renderState)}if(ve&&ve.includes("camera-access")&&A){e.state.unbindTexture(),p=n.getBinding();for(let ze=0;ze<xe.length;ze++){const He=xe[ze].camera;if(He){let nt=u[He];nt||(nt=new el,u[He]=nt);const Ue=p.getCameraImage(He);nt.sourceTexture=Ue}}}}for(let xe=0;xe<T.length;xe++){const Le=y[xe],ve=T[xe];Le!==null&&ve!==void 0&&ve.update(Le,ne,l||a)}tt&&tt($,ne),ne.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ne}),v=null}const qe=new rl;qe.setAnimationLoop(Ne),this.setAnimationLoop=function($){tt=$},this.dispose=function(){}}}const Dp=new pt,ul=new Ie;ul.set(-1,0,0,0,1,0,0,0,1);function Ip(i,e){function t(m,u){m.matrixAutoUpdate===!0&&m.updateMatrix(),u.value.copy(m.matrix)}function n(m,u){u.color.getRGB(m.fogColor.value,tl(i)),u.isFog?(m.fogNear.value=u.near,m.fogFar.value=u.far):u.isFogExp2&&(m.fogDensity.value=u.density)}function r(m,u,w,U,M){u.isNodeMaterial?u.uniformsNeedUpdate=!1:u.isMeshBasicMaterial?s(m,u):u.isMeshLambertMaterial?(s(m,u),u.envMap&&(m.envMapIntensity.value=u.envMapIntensity)):u.isMeshToonMaterial?(s(m,u),p(m,u)):u.isMeshPhongMaterial?(s(m,u),h(m,u),u.envMap&&(m.envMapIntensity.value=u.envMapIntensity)):u.isMeshStandardMaterial?(s(m,u),d(m,u),u.isMeshPhysicalMaterial&&g(m,u,M)):u.isMeshMatcapMaterial?(s(m,u),v(m,u)):u.isMeshDepthMaterial?s(m,u):u.isMeshDistanceMaterial?(s(m,u),A(m,u)):u.isMeshNormalMaterial?s(m,u):u.isLineBasicMaterial?(a(m,u),u.isLineDashedMaterial&&o(m,u)):u.isPointsMaterial?c(m,u,w,U):u.isSpriteMaterial?l(m,u):u.isShadowMaterial?(m.color.value.copy(u.color),m.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(m,u){m.opacity.value=u.opacity,u.color&&m.diffuse.value.copy(u.color),u.emissive&&m.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(m.map.value=u.map,t(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,t(u.alphaMap,m.alphaMapTransform)),u.bumpMap&&(m.bumpMap.value=u.bumpMap,t(u.bumpMap,m.bumpMapTransform),m.bumpScale.value=u.bumpScale,u.side===Ot&&(m.bumpScale.value*=-1)),u.normalMap&&(m.normalMap.value=u.normalMap,t(u.normalMap,m.normalMapTransform),m.normalScale.value.copy(u.normalScale),u.side===Ot&&m.normalScale.value.negate()),u.displacementMap&&(m.displacementMap.value=u.displacementMap,t(u.displacementMap,m.displacementMapTransform),m.displacementScale.value=u.displacementScale,m.displacementBias.value=u.displacementBias),u.emissiveMap&&(m.emissiveMap.value=u.emissiveMap,t(u.emissiveMap,m.emissiveMapTransform)),u.specularMap&&(m.specularMap.value=u.specularMap,t(u.specularMap,m.specularMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest);const w=e.get(u),U=w.envMap,M=w.envMapRotation;U&&(m.envMap.value=U,m.envMapRotation.value.setFromMatrix4(Dp.makeRotationFromEuler(M)).transpose(),U.isCubeTexture&&U.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(ul),m.reflectivity.value=u.reflectivity,m.ior.value=u.ior,m.refractionRatio.value=u.refractionRatio),u.lightMap&&(m.lightMap.value=u.lightMap,m.lightMapIntensity.value=u.lightMapIntensity,t(u.lightMap,m.lightMapTransform)),u.aoMap&&(m.aoMap.value=u.aoMap,m.aoMapIntensity.value=u.aoMapIntensity,t(u.aoMap,m.aoMapTransform))}function a(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,u.map&&(m.map.value=u.map,t(u.map,m.mapTransform))}function o(m,u){m.dashSize.value=u.dashSize,m.totalSize.value=u.dashSize+u.gapSize,m.scale.value=u.scale}function c(m,u,w,U){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.size.value=u.size*w,m.scale.value=U*.5,u.map&&(m.map.value=u.map,t(u.map,m.uvTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,t(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function l(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.rotation.value=u.rotation,u.map&&(m.map.value=u.map,t(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,t(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function h(m,u){m.specular.value.copy(u.specular),m.shininess.value=Math.max(u.shininess,1e-4)}function p(m,u){u.gradientMap&&(m.gradientMap.value=u.gradientMap)}function d(m,u){m.metalness.value=u.metalness,u.metalnessMap&&(m.metalnessMap.value=u.metalnessMap,t(u.metalnessMap,m.metalnessMapTransform)),m.roughness.value=u.roughness,u.roughnessMap&&(m.roughnessMap.value=u.roughnessMap,t(u.roughnessMap,m.roughnessMapTransform)),u.envMap&&(m.envMapIntensity.value=u.envMapIntensity)}function g(m,u,w){m.ior.value=u.ior,u.sheen>0&&(m.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),m.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(m.sheenColorMap.value=u.sheenColorMap,t(u.sheenColorMap,m.sheenColorMapTransform)),u.sheenRoughnessMap&&(m.sheenRoughnessMap.value=u.sheenRoughnessMap,t(u.sheenRoughnessMap,m.sheenRoughnessMapTransform))),u.clearcoat>0&&(m.clearcoat.value=u.clearcoat,m.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(m.clearcoatMap.value=u.clearcoatMap,t(u.clearcoatMap,m.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,t(u.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(m.clearcoatNormalMap.value=u.clearcoatNormalMap,t(u.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===Ot&&m.clearcoatNormalScale.value.negate())),u.dispersion>0&&(m.dispersion.value=u.dispersion),u.retroreflectivity>0&&(m.retroreflectivity.value=u.retroreflectivity),u.iridescence>0&&(m.iridescence.value=u.iridescence,m.iridescenceIOR.value=u.iridescenceIOR,m.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(m.iridescenceMap.value=u.iridescenceMap,t(u.iridescenceMap,m.iridescenceMapTransform)),u.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=u.iridescenceThicknessMap,t(u.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),u.transmission>0&&(m.transmission.value=u.transmission,m.transmissionSamplerMap.value=w.texture,m.transmissionSamplerSize.value.set(w.width,w.height),u.transmissionMap&&(m.transmissionMap.value=u.transmissionMap,t(u.transmissionMap,m.transmissionMapTransform)),m.thickness.value=u.thickness,u.thicknessMap&&(m.thicknessMap.value=u.thicknessMap,t(u.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=u.attenuationDistance,m.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(m.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(m.anisotropyMap.value=u.anisotropyMap,t(u.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=u.specularIntensity,m.specularColor.value.copy(u.specularColor),u.specularColorMap&&(m.specularColorMap.value=u.specularColorMap,t(u.specularColorMap,m.specularColorMapTransform)),u.specularIntensityMap&&(m.specularIntensityMap.value=u.specularIntensityMap,t(u.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,u){u.matcap&&(m.matcap.value=u.matcap)}function A(m,u){const w=e.get(u).light;m.referencePosition.value.setFromMatrixPosition(w.matrixWorld),m.nearDistance.value=w.shadow.camera.near,m.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function Up(i,e,t,n){let r={},s={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(M,T){const y=T.program;n.uniformBlockBinding(M,y)}function l(M,T){let y=r[M.id];y===void 0&&(m(M),y=h(M),r[M.id]=y,M.addEventListener("dispose",w));const P=T.program;n.updateUBOMapping(M,P);const _=e.render.frame;s[M.id]!==_&&(d(M),s[M.id]=_)}function h(M){const T=p();M.__bindingPointIndex=T;const y=i.createBuffer(),P=M.__size,_=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,y),i.bufferData(i.UNIFORM_BUFFER,P,_),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,T,y),y}function p(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return Ke("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(M){const T=r[M.id],y=M.uniforms,P=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,T);for(let _=0,E=y.length;_<E;_++){const C=y[_];if(Array.isArray(C))for(let F=0,O=C.length;F<O;F++)g(C[F],_,F,P);else g(C,_,0,P)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function g(M,T,y,P){if(A(M,T,y,P)===!0){const _=M.__offset,E=M.value;if(Array.isArray(E)){let C=0;for(let F=0;F<E.length;F++){const O=E[F],z=u(O);v(O,M.__data,C),typeof O!="number"&&typeof O!="boolean"&&!O.isMatrix3&&!ArrayBuffer.isView(O)&&(C+=z.storage/Float32Array.BYTES_PER_ELEMENT)}}else v(E,M.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,_,M.__data)}}function v(M,T,y){typeof M=="number"||typeof M=="boolean"?T[0]=M:M.isMatrix3?(T[0]=M.elements[0],T[1]=M.elements[1],T[2]=M.elements[2],T[3]=0,T[4]=M.elements[3],T[5]=M.elements[4],T[6]=M.elements[5],T[7]=0,T[8]=M.elements[6],T[9]=M.elements[7],T[10]=M.elements[8],T[11]=0):ArrayBuffer.isView(M)?T.set(new M.constructor(M.buffer,M.byteOffset,T.length)):M.toArray(T,y)}function A(M,T,y,P){const _=M.value,E=T+"_"+y;if(P[E]===void 0)return typeof _=="number"||typeof _=="boolean"?P[E]=_:ArrayBuffer.isView(_)?P[E]=_.slice():P[E]=_.clone(),!0;{const C=P[E];if(typeof _=="number"||typeof _=="boolean"){if(C!==_)return P[E]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(C.equals(_)===!1)return C.copy(_),!0}}return!1}function m(M){const T=M.uniforms;let y=0;const P=16;for(let E=0,C=T.length;E<C;E++){const F=Array.isArray(T[E])?T[E]:[T[E]];for(let O=0,z=F.length;O<z;O++){const I=F[O],X=Array.isArray(I.value)?I.value:[I.value];for(let Q=0,Z=X.length;Q<Z;Q++){const oe=X[Q],Y=u(oe),te=y%P,ae=te%Y.boundary,Ce=te+ae;y+=ae,Ce!==0&&P-Ce<Y.storage&&(y+=P-Ce),I.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=y,y+=Y.storage}}}const _=y%P;return _>0&&(y+=P-_),M.__size=y,M.__cache={},this}function u(M){const T={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(T.boundary=4,T.storage=4):M.isVector2?(T.boundary=8,T.storage=8):M.isVector3||M.isColor?(T.boundary=16,T.storage=12):M.isVector4?(T.boundary=16,T.storage=16):M.isMatrix3?(T.boundary=48,T.storage=48):M.isMatrix4?(T.boundary=64,T.storage=64):M.isTexture?Pe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(T.boundary=16,T.storage=M.byteLength):Pe("WebGLRenderer: Unsupported uniform value type.",M),T}function w(M){const T=M.target;T.removeEventListener("dispose",w);const y=a.indexOf(T.__bindingPointIndex);a.splice(y,1),i.deleteBuffer(r[T.id]),delete r[T.id],delete s[T.id]}function U(){for(const M in r)i.deleteBuffer(r[M]);a=[],r={},s={}}return{bind:c,update:l,dispose:U}}const Np=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let nn=null;function Fp(){return nn===null&&(nn=new yc(Np,16,16,Xn,cn),nn.name="DFG_LUT",nn.minFilter=Lt,nn.magFilter=Lt,nn.wrapS=_n,nn.wrapT=_n,nn.generateMipmaps=!1,nn.needsUpdate=!0),nn}class Op{constructor(e={}){const{canvas:t=Jl(),context:n=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:p=!1,reversedDepthBuffer:d=!1,outputBufferType:g=Gt}=e;this.isWebGLRenderer=!0;let v;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");v=n.getContextAttributes().alpha}else v=a;const A=g,m=new Set([aa,sa,ra]),u=new Set([Gt,ln,Ii,Ui,na,ia]),w=new Uint32Array(4),U=new Int32Array(4),M=new k;let T=null,y=null;const P=[],_=[];let E=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=on,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const C=this;let F=!1,O=null,z=null,I=null,X=null;this._outputColorSpace=kt;let Q=0,Z=0,oe=null,Y=-1,te=null;const ae=new ut,Ce=new ut;let we=null;const tt=new $e(0);let Ne=0,qe=t.width,$=t.height,ne=1,xe=null,Le=null;const ve=new ut(0,0,qe,$),Fe=new ut(0,0,qe,$);let ct=!1;const ze=new ua;let He=!1,nt=!1;const Ue=new pt,st=new k,gt=new ut,wt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let at=!1;function ht(){return oe===null?ne:1}let N=n;function St(x,D){return t.getContext(x,D)}let Ze,b,f,B,W,K,ue,he,S,L,j,de,se,ie,fe,Ee,be,R,J,G,re,ce,ee;try{const x={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:p};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ea}`),t.addEventListener("webglcontextlost",Xe,!1),t.addEventListener("webglcontextrestored",De,!1),t.addEventListener("webglcontextcreationerror",Je,!1),N===null){const D="webgl2";if(N=St(D,x),N===null)throw St(D)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Me()}catch(x){throw t.removeEventListener("webglcontextlost",Xe,!1),t.removeEventListener("webglcontextrestored",De,!1),t.removeEventListener("webglcontextcreationerror",Je,!1),Ke("WebGLRenderer: "+x.message),x}function Me(){Ze=new Nh(N),Ze.init(),re=new wp(N,Ze),b=new Th(N,Ze,e,re),f=new Tp(N,Ze),b.reversedDepthBuffer&&d&&f.buffers.depth.setReversed(!0),z=N.createFramebuffer(),I=N.createFramebuffer(),X=N.createFramebuffer(),B=new Bh(N),W=new up,K=new Ap(N,Ze,f,W,b,re,B),ue=new Uh(C),he=new Gc(N),ce=new yh(N,he),S=new Fh(N,he,B,ce),L=new Gh(N,S,he,ce,B),R=new zh(N,b,K),fe=new Ah(W),j=new dp(C,ue,Ze,b,ce,fe),de=new Ip(C,W),se=new fp,ie=new vp(Ze),be=new Eh(C,ue,f,L,v,c),Ee=new bp(C,L,b),ee=new Up(N,B,b,f),J=new bh(N,Ze,B),G=new Oh(N,Ze,B),B.programs=j.programs,C.capabilities=b,C.extensions=Ze,C.properties=W,C.renderLists=se,C.shadowMap=Ee,C.state=f,C.info=B}A!==Gt&&(E=new Vh(A,t.width,t.height,o,r,s));const _e=new Lp(C,N);this.xr=_e,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const x=Ze.get("WEBGL_lose_context");x&&x.loseContext()},this.forceContextRestore=function(){const x=Ze.get("WEBGL_lose_context");x&&x.restoreContext()},this.getPixelRatio=function(){return ne},this.setPixelRatio=function(x){x!==void 0&&(ne=x,this.setSize(qe,$,!1))},this.getSize=function(x){return x.set(qe,$)},this.setSize=function(x,D,q=!0){if(_e.isPresenting){Pe("WebGLRenderer: Can't change size while VR device is presenting.");return}qe=x,$=D,t.width=Math.floor(x*ne),t.height=Math.floor(D*ne),q===!0&&(t.style.width=x+"px",t.style.height=D+"px"),E!==null&&E.setSize(t.width,t.height),this.setViewport(0,0,x,D)},this.getDrawingBufferSize=function(x){return x.set(qe*ne,$*ne).floor()},this.setDrawingBufferSize=function(x,D,q){qe=x,$=D,ne=q,t.width=Math.floor(x*q),t.height=Math.floor(D*q),this.setViewport(0,0,x,D)},this.setEffects=function(x){if(A===Gt){Ke("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(x){for(let D=0;D<x.length;D++)if(x[D].isOutputPass===!0){Pe("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}E.setEffects(x||[])},this.getCurrentViewport=function(x){return x.copy(ae)},this.getViewport=function(x){return x.copy(ve)},this.setViewport=function(x,D,q,H){x.isVector4?ve.set(x.x,x.y,x.z,x.w):ve.set(x,D,q,H),f.viewport(ae.copy(ve).multiplyScalar(ne).round())},this.getScissor=function(x){return x.copy(Fe)},this.setScissor=function(x,D,q,H){x.isVector4?Fe.set(x.x,x.y,x.z,x.w):Fe.set(x,D,q,H),f.scissor(Ce.copy(Fe).multiplyScalar(ne).round())},this.getScissorTest=function(){return ct},this.setScissorTest=function(x){f.setScissorTest(ct=x)},this.setOpaqueSort=function(x){xe=x},this.setTransparentSort=function(x){Le=x},this.getClearColor=function(x){return x.copy(be.getClearColor())},this.setClearColor=function(){be.setClearColor(...arguments)},this.getClearAlpha=function(){return be.getClearAlpha()},this.setClearAlpha=function(){be.setClearAlpha(...arguments)},this.clear=function(x=!0,D=!0,q=!0){let H=0;if(x){let V=!1;if(oe!==null){const ge=oe.texture.format;V=m.has(ge)}if(V){const ge=oe.texture.type,ye=u.has(ge),me=be.getClearColor(),Te=be.getClearAlpha(),Re=me.r,Oe=me.g,Ge=me.b;ye?(w[0]=Re,w[1]=Oe,w[2]=Ge,w[3]=Te,N.clearBufferuiv(N.COLOR,0,w)):(U[0]=Re,U[1]=Oe,U[2]=Ge,U[3]=Te,N.clearBufferiv(N.COLOR,0,U))}else H|=N.COLOR_BUFFER_BIT}D&&(H|=N.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),q&&(H|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H!==0&&N.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(x){x.setRenderer(this),O=x},this.dispose=function(){t.removeEventListener("webglcontextlost",Xe,!1),t.removeEventListener("webglcontextrestored",De,!1),t.removeEventListener("webglcontextcreationerror",Je,!1),be.dispose(),se.dispose(),ie.dispose(),W.dispose(),ue.dispose(),L.dispose(),ce.dispose(),ee.dispose(),j.dispose(),_e.dispose(),_e.removeEventListener("sessionstart",Hi),_e.removeEventListener("sessionend",Vi),jt.stop()};function Xe(x){x.preventDefault(),Pa("WebGLRenderer: Context Lost."),F=!0}function De(){Pa("WebGLRenderer: Context Restored."),F=!1;const x=B.autoReset,D=Ee.enabled,q=Ee.autoUpdate,H=Ee.needsUpdate,V=Ee.type;Me(),B.autoReset=x,Ee.enabled=D,Ee.autoUpdate=q,Ee.needsUpdate=H,Ee.type=V}function Je(x){Ke("WebGLRenderer: A WebGL context could not be created. Reason: ",x.statusMessage)}function dt(x){const D=x.target;D.removeEventListener("dispose",dt),In(D)}function In(x){xi(x),W.remove(x)}function xi(x){const D=W.get(x).programs;D!==void 0&&(D.forEach(function(q){j.releaseProgram(q)}),x.isShaderMaterial&&j.releaseShaderCache(x))}this.renderBufferDirect=function(x,D,q,H,V,ge){D===null&&(D=wt);const ye=V.isMesh&&V.matrixWorld.determinantAffine()<0,me=fl(x,D,q,H,V);f.setMaterial(H,ye);let Te=q.index,Re=1;if(H.wireframe===!0){if(Te=S.getWireframeAttribute(q),Te===void 0)return;Re=2}const Oe=q.drawRange,Ge=q.attributes.position;let Ae=Oe.start*Re,je=(Oe.start+Oe.count)*Re;ge!==null&&(Ae=Math.max(Ae,ge.start*Re),je=Math.min(je,(ge.start+ge.count)*Re)),Te!==null?(Ae=Math.max(Ae,0),je=Math.min(je,Te.count)):Ge!=null&&(Ae=Math.max(Ae,0),je=Math.min(je,Ge.count));const _t=je-Ae;if(_t<0||_t===1/0)return;ce.setup(V,H,me,q,Te);let lt,rt=J;if(Te!==null&&(lt=he.get(Te),rt=G,rt.setIndex(lt)),V.isMesh)H.wireframe===!0?(f.setLineWidth(H.wireframeLinewidth*ht()),rt.setMode(N.LINES)):rt.setMode(N.TRIANGLES);else if(V.isLine){let Rt=H.linewidth;Rt===void 0&&(Rt=1),f.setLineWidth(Rt*ht()),V.isLineSegments?rt.setMode(N.LINES):V.isLineLoop?rt.setMode(N.LINE_LOOP):rt.setMode(N.LINE_STRIP)}else V.isPoints?rt.setMode(N.POINTS):V.isSprite&&rt.setMode(N.TRIANGLES);if(V.isBatchedMesh)if(Ze.get("WEBGL_multi_draw"))rt.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{const Rt=V._multiDrawStarts,Se=V._multiDrawCounts,It=V._multiDrawCount,Ye=Te?he.get(Te).bytesPerElement:1,Ht=W.get(H).currentProgram.getUniforms();for(let en=0;en<It;en++)Ht.setValue(N,"_gl_DrawID",en),rt.render(Rt[en]/Ye,Se[en])}else if(V.isInstancedMesh)rt.renderInstances(Ae,_t,V.count);else if(q.isInstancedBufferGeometry){const Rt=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,Se=Math.min(q.instanceCount,Rt);rt.renderInstances(Ae,_t,Se)}else rt.render(Ae,_t)};function Un(x,D,q,H){O!==null&&x.isNodeMaterial&&O.setObject(H,x),He===!0&&fe.setState(x,q,!1),x.transparent===!0&&x.side===gn&&x.forceSinglePass===!1?(x.side=Ot,x.needsUpdate=!0,Wi(x,D,H),x.side=kn,x.needsUpdate=!0,Wi(x,D,H),x.side=gn):Wi(x,D,H)}this.compile=function(x,D,q=null){q===null&&(q=x),O!==null&&O.renderStart(x,D,q),y=ie.get(q),y.init(D),_.push(y),q.traverseVisible(function(V){V.isLight&&V.layers.test(D.layers)&&(y.pushLight(V),V.castShadow&&y.pushShadow(V))}),x!==q&&x.traverseVisible(function(V){V.isLight&&V.layers.test(D.layers)&&(y.pushLight(V),V.castShadow&&y.pushShadow(V))}),y.setupLights(),O!==null&&O.updateLights(y.state.lightsArray),nt=this.localClippingEnabled,He=fe.init(this.clippingPlanes,nt),He===!0&&fe.setGlobalState(this.clippingPlanes,D),O!==null&&Ee.render(y.state.shadowsArray,q,D);const H=new Set;return x.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;const ge=V.material;if(ge)if(Array.isArray(ge))for(let ye=0;ye<ge.length;ye++){const me=ge[ye];Un(me,q,D,V),H.add(me)}else Un(ge,q,D,V),H.add(ge)}),y=_.pop(),O!==null&&O.renderEnd(),H},this.compileAsync=function(x,D,q=null){const H=this.compile(x,D,q);return new Promise(V=>{function ge(){if(H.forEach(function(ye){const Te=W.get(ye).currentProgram;(Te===void 0||Te.isReady())&&H.delete(ye)}),H.size===0){V(x);return}setTimeout(ge,10)}Ze.get("KHR_parallel_shader_compile")!==null?ge():setTimeout(ge,10)})};let qt=null;function vi(x){qt&&qt(x)}function Hi(){jt.stop()}function Vi(){jt.start()}const jt=new rl;jt.setAnimationLoop(vi),typeof self<"u"&&jt.setContext(self),this.setAnimationLoop=function(x){qt=x,_e.setAnimationLoop(x),x===null?jt.stop():jt.start()},_e.addEventListener("sessionstart",Hi),_e.addEventListener("sessionend",Vi),this.render=function(x,D){if(D!==void 0&&D.isCamera!==!0){Ke("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(F===!0)return;O!==null&&O.renderStart(x,D);const q=_e.enabled===!0&&_e.isPresenting===!0,H=E!==null&&(oe===null||q)&&E.begin(C,oe);if(x.matrixWorldAutoUpdate===!0&&x.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),_e.enabled===!0&&_e.isPresenting===!0&&(E===null||E.isCompositing()===!1)&&(_e.cameraAutoUpdate===!0&&_e.updateCamera(D),D=_e.getCamera()),x.isScene===!0&&x.onBeforeRender(C,x,D,oe),y=ie.get(x,_.length),y.init(D),y.state.textureUnits=K.getTextureUnits(),_.push(y),Ue.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),ze.setFromProjectionMatrix(Ue,an,D.reversedDepth),nt=this.localClippingEnabled,He=fe.init(this.clippingPlanes,nt),T=se.get(x,P.length),T.init(),P.push(T),_e.enabled===!0&&_e.isPresenting===!0){const ye=C.xr.getDepthSensingMesh();ye!==null&&Yn(ye,D,-1/0,C.sortObjects)}Yn(x,D,0,C.sortObjects),T.finish(),O!==null&&O.updateLights(y.state.lightsArray),C.sortObjects===!0&&T.sort(xe,Le),at=_e.enabled===!1||_e.isPresenting===!1||_e.hasDepthSensing()===!1,at&&be.addToRenderList(T,x),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),He===!0&&fe.beginShadows();const V=y.state.shadowsArray;if(Ee.render(V,x,D),He===!0&&fe.endShadows(),(H&&E.hasRenderPass())===!1){const ye=T.opaque,me=T.transmissive;if(y.setupLights(),D.isArrayCamera){const Te=D.cameras;if(me.length>0)for(let Re=0,Oe=Te.length;Re<Oe;Re++){const Ge=Te[Re];ft(ye,me,x,Ge)}at&&be.render(x);for(let Re=0,Oe=Te.length;Re<Oe;Re++){const Ge=Te[Re];bt(T,x,Ge,Ge.viewport)}}else me.length>0&&ft(ye,me,x,D),at&&be.render(x),bt(T,x,D)}oe!==null&&Z===0&&(K.updateMultisampleRenderTarget(oe),K.updateRenderTargetMipmap(oe)),H&&E.end(C),x.isScene===!0&&x.onAfterRender(C,x,D),ce.resetDefaultState(),Y=-1,te=null,_.pop(),_.length>0?(y=_[_.length-1],K.setTextureUnits(y.state.textureUnits),He===!0&&fe.setGlobalState(C.clippingPlanes,y.state.camera)):y=null,P.pop(),P.length>0?T=P[P.length-1]:T=null,O!==null&&O.renderEnd()};function Yn(x,D,q,H){if(x.visible===!1)return;if(x.layers.test(D.layers)){if(x.isGroup)q=x.renderOrder;else if(x.isLOD)x.autoUpdate===!0&&x.update(D);else if(x.isLightProbeGrid)y.pushLightProbeGrid(x);else if(x.isLight)y.pushLight(x),x.castShadow&&y.pushShadow(x);else if(x.isSprite){if(!x.frustumCulled||x.intersectsFrustum(ze)){H&&gt.setFromMatrixPosition(x.matrixWorld).applyMatrix4(Ue);const ye=L.update(x),me=x.material;me.visible&&T.push(x,ye,me,q,gt.z,null,D)}}else if((x.isMesh||x.isLine||x.isPoints)&&(!x.frustumCulled||x.intersectsFrustum(ze))){const ye=L.update(x),me=x.material;if(H&&(x.boundingSphere!==void 0?(x.boundingSphere===null&&x.computeBoundingSphere(),gt.copy(x.boundingSphere.center)):(ye.boundingSphere===null&&ye.computeBoundingSphere(),gt.copy(ye.boundingSphere.center)),gt.applyMatrix4(x.matrixWorld).applyMatrix4(Ue)),Array.isArray(me)){const Te=ye.groups;for(let Re=0,Oe=Te.length;Re<Oe;Re++){const Ge=Te[Re],Ae=me[Ge.materialIndex];Ae&&Ae.visible&&T.push(x,ye,Ae,q,gt.z,Ge,D)}}else me.visible&&T.push(x,ye,me,q,gt.z,null,D)}}const ge=x.children;for(let ye=0,me=ge.length;ye<me;ye++)Yn(ge[ye],D,q,H)}function bt(x,D,q,H){const{opaque:V,transmissive:ge,transparent:ye}=x;y.setupLightsView(q),He===!0&&fe.setGlobalState(C.clippingPlanes,q),H&&f.viewport(ae.copy(H)),V.length>0&&ki(V,D,q),ge.length>0&&ki(ge,D,q),ye.length>0&&ki(ye,D,q),f.buffers.depth.setTest(!0),f.buffers.depth.setMask(!0),f.buffers.color.setMask(!0),f.setPolygonOffset(!1)}function ft(x,D,q,H){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;if(y.state.transmissionRenderTarget[H.id]===void 0){const Ae=Ze.has("EXT_color_buffer_half_float")||Ze.has("EXT_color_buffer_float");y.state.transmissionRenderTarget[H.id]=new Qt(1,1,{generateMipmaps:!0,type:Ae?cn:Gt,minFilter:Gn,samples:Math.max(4,b.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Ve.workingColorSpace})}const ge=y.state.transmissionRenderTarget[H.id],ye=H.viewport||ae;ge.setSize(ye.z*C.transmissionResolutionScale,ye.w*C.transmissionResolutionScale);const me=C.getRenderTarget(),Te=C.getActiveCubeFace(),Re=C.getActiveMipmapLevel();C.setRenderTarget(ge),C.getClearColor(tt),Ne=C.getClearAlpha(),Ne<1&&C.setClearColor(16777215,.5),C.clear(),at&&be.render(q);const Oe=C.toneMapping;C.toneMapping=on;const Ge=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),y.setupLightsView(H),He===!0&&fe.setGlobalState(C.clippingPlanes,H),ki(x,q,H),K.updateMultisampleRenderTarget(ge),K.updateRenderTargetMipmap(ge),Ze.has("WEBGL_multisampled_render_to_texture")===!1){let Ae=!1;for(let je=0,_t=D.length;je<_t;je++){const lt=D[je],{object:rt,geometry:Rt,material:Se,group:It}=lt;if(Se.side===gn&&rt.layers.test(H.layers)){const Ye=Se.side;Se.side=Ot,Se.needsUpdate=!0,va(rt,q,H,Rt,Se,It),Se.side=Ye,Se.needsUpdate=!0,Ae=!0}}Ae===!0&&(K.updateMultisampleRenderTarget(ge),K.updateRenderTargetMipmap(ge))}C.setRenderTarget(me,Te,Re),C.setClearColor(tt,Ne),Ge!==void 0&&(H.viewport=Ge),C.toneMapping=Oe}function ki(x,D,q){const H=D.isScene===!0?D.overrideMaterial:null;for(let V=0,ge=x.length;V<ge;V++){const ye=x[V],{object:me,geometry:Te,group:Re}=ye;let Oe=ye.material;Oe.allowOverride===!0&&H!==null&&(Oe=H),me.layers.test(q.layers)&&va(me,D,q,Te,Oe,Re)}}function va(x,D,q,H,V,ge){O!==null&&V.isNodeMaterial&&O.setObject(x,V),x.onBeforeRender(C,D,q,H,V,ge),x.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,x.matrixWorld),x.normalMatrix.getNormalMatrix(x.modelViewMatrix),V.onBeforeRender(C,D,q,H,x,ge),V.transparent===!0&&V.side===gn&&V.forceSinglePass===!1?(V.side=Ot,V.needsUpdate=!0,C.renderBufferDirect(q,D,H,V,x,ge),V.side=kn,V.needsUpdate=!0,C.renderBufferDirect(q,D,H,V,x,ge),V.side=gn):C.renderBufferDirect(q,D,H,V,x,ge),x.onAfterRender(C,D,q,H,V,ge)}function Wi(x,D,q){D.isScene!==!0&&(D=wt);const H=W.get(x),V=y.state.lights,ge=y.state.shadowsArray,ye=V.state.version,me=j.getParameters(x,V.state,ge,D,q,y.state.lightProbeGridArray),Te=j.getProgramCacheKey(me);let Re=H.programs;H.environment=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?D.environment:null,H.fog=D.fog;const Oe=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap;H.envMap=ue.get(x.envMap||H.environment,Oe),H.envMapRotation=H.environment!==null&&x.envMap===null?D.environmentRotation:x.envMapRotation,Re===void 0&&(x.addEventListener("dispose",dt),Re=new Map,H.programs=Re);let Ge=Re.get(Te);if(Ge!==void 0){if(H.currentProgram===Ge&&H.lightsStateVersion===ye)return Sa(x,me),Ge}else me.uniforms=j.getUniforms(x),O!==null&&x.isNodeMaterial&&O.build(x,q,me),x.onBeforeCompile(me,C),Ge=j.acquireProgram(me,Te),Re.set(Te,Ge),H.uniforms=me.uniforms;const Ae=H.uniforms;return(!x.isShaderMaterial&&!x.isRawShaderMaterial||x.clipping===!0)&&(Ae.clippingPlanes=fe.uniform),Sa(x,me),H.needsLights=ml(x),H.lightsStateVersion=ye,H.needsLights&&(Ae.ambientLightColor.value=V.state.ambient,Ae.lightProbe.value=V.state.probe,Ae.sunLights.value=V.state.sun,Ae.sunLightShadows.value=V.state.sunShadow,Ae.directionalLights.value=V.state.directional,Ae.directionalLightShadows.value=V.state.directionalShadow,Ae.spotLights.value=V.state.spot,Ae.spotLightShadows.value=V.state.spotShadow,Ae.rectAreaLights.value=V.state.rectArea,Ae.ltc_1.value=V.state.rectAreaLTC1,Ae.ltc_2.value=V.state.rectAreaLTC2,Ae.pointLights.value=V.state.point,Ae.pointLightShadows.value=V.state.pointShadow,Ae.hemisphereLights.value=V.state.hemi,Ae.sunShadowMatrix.value=V.state.sunShadowMatrix,Ae.sunShadowCascade.value=V.state.sunShadowCascade,Ae.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Ae.spotLightMatrix.value=V.state.spotLightMatrix,Ae.spotLightMap.value=V.state.spotLightMap,Ae.pointShadowMatrix.value=V.state.pointShadowMatrix),H.lightProbeGrid=y.state.lightProbeGridArray.length>0,H.currentProgram=Ge,H.uniformsList=null,Ge}function Ma(x){if(x.uniformsList===null){const D=x.currentProgram.getUniforms();x.uniformsList=vr.seqWithValue(D.seq,x.uniforms)}return x.uniformsList}function Sa(x,D){const q=W.get(x);q.outputColorSpace=D.outputColorSpace,q.batching=D.batching,q.batchingColor=D.batchingColor,q.instancing=D.instancing,q.instancingColor=D.instancingColor,q.instancingMorph=D.instancingMorph,q.skinning=D.skinning,q.morphTargets=D.morphTargets,q.morphNormals=D.morphNormals,q.morphColors=D.morphColors,q.morphTargetsCount=D.morphTargetsCount,q.numClippingPlanes=D.numClippingPlanes,q.numIntersection=D.numClipIntersection,q.vertexAlphas=D.vertexAlphas,q.vertexTangents=D.vertexTangents,q.toneMapping=D.toneMapping}function hl(x,D){if(x.length===0)return null;if(x.length===1)return x[0].texture!==null?x[0]:null;M.setFromMatrixPosition(D.matrixWorld);for(let q=0,H=x.length;q<H;q++){const V=x[q];if(V.texture!==null&&V.boundingBox.containsPoint(M))return V}return null}function fl(x,D,q,H,V){D.isScene!==!0&&(D=wt),K.resetTextureUnits();const ge=D.fog,ye=H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial?D.environment:null,me=oe===null?C.outputColorSpace:oe.isXRRenderTarget===!0?oe.texture.colorSpace:Ve.workingColorSpace,Te=H.isMeshStandardMaterial||H.isMeshLambertMaterial&&!H.envMap||H.isMeshPhongMaterial&&!H.envMap,Re=ue.get(H.envMap||ye,Te),Oe=H.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Ge=!!q.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Ae=!!q.morphAttributes.position,je=!!q.morphAttributes.normal,_t=!!q.morphAttributes.color;let lt=on;H.toneMapped&&(oe===null||oe.isXRRenderTarget===!0)&&(lt=C.toneMapping);const rt=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,Rt=rt!==void 0?rt.length:0,Se=W.get(H),It=y.state.lights;if(He===!0&&(nt===!0||x!==te)){const ot=x===te&&H.id===Y;fe.setState(H,x,ot)}let Ye=!1;H.version===Se.__version?(Se.needsLights&&Se.lightsStateVersion!==It.state.version||Se.outputColorSpace!==me||V.isBatchedMesh&&Se.batching===!1||!V.isBatchedMesh&&Se.batching===!0||V.isBatchedMesh&&Se.batchingColor===!0&&V._colorsTexture===null||V.isBatchedMesh&&Se.batchingColor===!1&&V._colorsTexture!==null||V.isInstancedMesh&&Se.instancing===!1||!V.isInstancedMesh&&Se.instancing===!0||V.isSkinnedMesh&&Se.skinning===!1||!V.isSkinnedMesh&&Se.skinning===!0||V.isInstancedMesh&&Se.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&Se.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&Se.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&Se.instancingMorph===!1&&V.morphTexture!==null||Se.envMap!==Re||H.fog===!0&&Se.fog!==ge||Se.numClippingPlanes!==void 0&&(Se.numClippingPlanes!==fe.numPlanes||Se.numIntersection!==fe.numIntersection)||Se.vertexAlphas!==Oe||Se.vertexTangents!==Ge||Se.morphTargets!==Ae||Se.morphNormals!==je||Se.morphColors!==_t||Se.toneMapping!==lt||Se.morphTargetsCount!==Rt||!!Se.lightProbeGrid!=y.state.lightProbeGridArray.length>0)&&(Ye=!0):(Ye=!0,Se.__version=H.version);let Ht=Se.currentProgram;Ye===!0&&(Ht=Wi(H,D,V),O&&H.isNodeMaterial&&O.onUpdateProgram(H,Ht,Se));let en=!1,En=!1,$n=!1;const it=Ht.getUniforms(),mt=Se.uniforms;if(f.useProgram(Ht.program)&&(en=!0,En=!0,$n=!0),H.id!==Y&&(Y=H.id,En=!0),Se.needsLights){const ot=hl(y.state.lightProbeGridArray,V);Se.lightProbeGrid!==ot&&(Se.lightProbeGrid=ot,En=!0)}if(en||te!==x){f.buffers.depth.getReversed()&&x.reversedDepth!==!0&&(x._reversedDepth=!0,x.updateProjectionMatrix()),it.setValue(N,"projectionMatrix",x.projectionMatrix),it.setValue(N,"viewMatrix",x.matrixWorldInverse);const bn=it.map.cameraPosition;bn!==void 0&&bn.setValue(N,st.setFromMatrixPosition(x.matrixWorld)),b.logarithmicDepthBuffer&&it.setValue(N,"logDepthBufFC",2/(Math.log(x.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&it.setValue(N,"isOrthographic",x.isOrthographicCamera===!0),te!==x&&(te=x,En=!0,$n=!0)}if(Se.needsLights&&(It.state.sunShadowMap.length>0&&it.setValue(N,"sunShadowMap",It.state.sunShadowMap,K),It.state.directionalShadowMap.length>0&&it.setValue(N,"directionalShadowMap",It.state.directionalShadowMap,K),It.state.spotShadowMap.length>0&&it.setValue(N,"spotShadowMap",It.state.spotShadowMap,K),It.state.pointShadowMap.length>0&&it.setValue(N,"pointShadowMap",It.state.pointShadowMap,K)),V.isSkinnedMesh){it.setOptional(N,V,"bindMatrix"),it.setOptional(N,V,"bindMatrixInverse");const ot=V.skeleton;ot&&(ot.boneTexture===null&&ot.computeBoneTexture(),it.setValue(N,"boneTexture",ot.boneTexture,K))}V.isBatchedMesh&&(it.setOptional(N,V,"batchingTexture"),it.setValue(N,"batchingTexture",V._matricesTexture,K),it.setOptional(N,V,"batchingIdTexture"),it.setValue(N,"batchingIdTexture",V._indirectTexture,K),it.setOptional(N,V,"batchingColorTexture"),V._colorsTexture!==null&&it.setValue(N,"batchingColorTexture",V._colorsTexture,K));const yn=q.morphAttributes;if((yn.position!==void 0||yn.normal!==void 0||yn.color!==void 0)&&R.update(V,q,Ht),(En||Se.receiveShadow!==V.receiveShadow)&&(Se.receiveShadow=V.receiveShadow,it.setValue(N,"receiveShadow",V.receiveShadow)),(H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial)&&H.envMap===null&&D.environment!==null&&(mt.envMapIntensity.value=D.environmentIntensity),mt.dfgLUT!==void 0&&(mt.dfgLUT.value=Fp()),En){if(it.setValue(N,"toneMappingExposure",C.toneMappingExposure),Se.needsLights&&pl(mt,$n),ge&&H.fog===!0&&de.refreshFogUniforms(mt,ge),de.refreshMaterialUniforms(mt,H,ne,$,y.state.transmissionRenderTarget[x.id]),Se.needsLights&&Se.lightProbeGrid){const ot=Se.lightProbeGrid;mt.probesSH.value=ot.texture,mt.probesMin.value.copy(ot.boundingBox.min),mt.probesMax.value.copy(ot.boundingBox.max),mt.probesResolution.value.copy(ot.resolution)}vr.upload(N,Ma(Se),mt,K)}if(H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(vr.upload(N,Ma(Se),mt,K),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&it.setValue(N,"center",V.center),it.setValue(N,"modelViewMatrix",V.modelViewMatrix),it.setValue(N,"normalMatrix",V.normalMatrix),it.setValue(N,"modelMatrix",V.matrixWorld),H.uniformsGroups!==void 0){const ot=H.uniformsGroups;for(let bn=0,Kn=ot.length;bn<Kn;bn++){const ya=ot[bn];ee.update(ya,Ht),ee.bind(ya,Ht)}}return Ht}function pl(x,D){x.ambientLightColor.needsUpdate=D,x.lightProbe.needsUpdate=D,x.sunLights.needsUpdate=D,x.sunLightShadows.needsUpdate=D,x.directionalLights.needsUpdate=D,x.directionalLightShadows.needsUpdate=D,x.pointLights.needsUpdate=D,x.pointLightShadows.needsUpdate=D,x.spotLights.needsUpdate=D,x.spotLightShadows.needsUpdate=D,x.rectAreaLights.needsUpdate=D,x.hemisphereLights.needsUpdate=D}function ml(x){return x.isMeshLambertMaterial||x.isMeshToonMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isShadowMaterial||x.isShaderMaterial&&x.lights===!0}this.getActiveCubeFace=function(){return Q},this.getActiveMipmapLevel=function(){return Z},this.getRenderTarget=function(){return oe},this.setRenderTargetTextures=function(x,D,q){const H=W.get(x);H.__autoAllocateDepthBuffer=x.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),W.get(x.texture).__webglTexture=D,W.get(x.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:q,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(x,D){const q=W.get(x);q.__webglFramebuffer=D,q.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(x,D=0,q=0){oe=x,Q=D,Z=q;let H=null,V=!1,ge=!1;if(x){const me=W.get(x);if(me.__useDefaultFramebuffer!==void 0){f.bindFramebuffer(N.FRAMEBUFFER,me.__webglFramebuffer),ae.copy(x.viewport),Ce.copy(x.scissor),we=x.scissorTest,f.viewport(ae),f.scissor(Ce),f.setScissorTest(we),Y=-1;return}else if(me.__webglFramebuffer===void 0)K.setupRenderTarget(x);else if(me.__hasExternalTextures)K.rebindTextures(x,W.get(x.texture).__webglTexture,W.get(x.depthTexture).__webglTexture);else if(x.depthBuffer){const Oe=x.depthTexture;if(me.__boundDepthTexture!==Oe){if(Oe!==null&&W.has(Oe)&&(x.width!==Oe.image.width||x.height!==Oe.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");K.setupDepthRenderbuffer(x)}}const Te=x.texture;(Te.isData3DTexture||Te.isDataArrayTexture||Te.isCompressedArrayTexture)&&(ge=!0);const Re=W.get(x).__webglFramebuffer;x.isWebGLCubeRenderTarget?(Array.isArray(Re[D])?H=Re[D][q]:H=Re[D],V=!0):x.samples>0&&K.useMultisampledRTT(x)===!1?H=W.get(x).__webglMultisampledFramebuffer:Array.isArray(Re)?H=Re[q]:H=Re,ae.copy(x.viewport),Ce.copy(x.scissor),we=x.scissorTest}else ae.copy(ve).multiplyScalar(ne).floor(),Ce.copy(Fe).multiplyScalar(ne).floor(),we=ct;if(q!==0&&(H=z),f.bindFramebuffer(N.FRAMEBUFFER,H)&&f.drawBuffers(x,H),f.viewport(ae),f.scissor(Ce),f.setScissorTest(we),V){const me=W.get(x.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+D,me.__webglTexture,q)}else if(ge){const me=D;for(let Te=0;Te<x.textures.length;Te++){const Re=W.get(x.textures[Te]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+Te,Re.__webglTexture,q,me)}}else if(x!==null&&q!==0){const me=W.get(x.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,me.__webglTexture,q)}Y=-1};function Ea(x){const D=W.get(x);return(D.__readFormat!==x.format||D.__readType!==x.type)&&(D.__readFormat=x.format,D.__readType=x.type,D.__formatReadable=b.textureFormatReadable(x.format),D.__typeReadable=b.textureTypeReadable(x.type)),D}this.readRenderTargetPixels=function(x,D,q,H,V,ge,ye,me=0){if(!(x&&x.isWebGLRenderTarget)){Ke("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Te=W.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&ye!==void 0&&(Te=Te[ye]),Te){f.bindFramebuffer(N.FRAMEBUFFER,Te);try{const Re=x.textures[me],Oe=Re.format,Ge=Re.type;x.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+me);const Ae=Ea(Re);if(Ae.__formatReadable===!1){Ke("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ae.__typeReadable===!1){Ke("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=x.width-H&&q>=0&&q<=x.height-V&&N.readPixels(D,q,H,V,re.convert(Oe),re.convert(Ge),ge)}finally{const Re=oe!==null?W.get(oe).__webglFramebuffer:null;f.bindFramebuffer(N.FRAMEBUFFER,Re)}}},this.readRenderTargetPixelsAsync=async function(x,D,q,H,V,ge,ye,me=0){if(!(x&&x.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Te=W.get(x).__webglFramebuffer;if(x.isWebGLCubeRenderTarget&&ye!==void 0&&(Te=Te[ye]),Te)if(D>=0&&D<=x.width-H&&q>=0&&q<=x.height-V){f.bindFramebuffer(N.FRAMEBUFFER,Te);const Re=x.textures[me],Oe=Re.format,Ge=Re.type;x.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+me);const Ae=Ea(Re);if(Ae.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ae.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const je=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,je),N.bufferData(N.PIXEL_PACK_BUFFER,ge.byteLength,N.STREAM_READ),N.readPixels(D,q,H,V,re.convert(Oe),re.convert(Ge),0),N.bindBuffer(N.PIXEL_PACK_BUFFER,null);const _t=oe!==null?W.get(oe).__webglFramebuffer:null;f.bindFramebuffer(N.FRAMEBUFFER,_t);const lt=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await Ql(N,lt,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,je),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,ge),N.bindBuffer(N.PIXEL_PACK_BUFFER,null),N.deleteBuffer(je),N.deleteSync(lt),ge}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(x,D=null,q=0){const H=Math.pow(2,-q),V=Math.floor(x.image.width*H),ge=Math.floor(x.image.height*H),ye=D!==null?D.x:0,me=D!==null?D.y:0;K.setTexture2D(x,0),N.copyTexSubImage2D(N.TEXTURE_2D,q,0,0,ye,me,V,ge),f.unbindTexture()},this.copyTextureToTexture=function(x,D,q=null,H=null,V=0,ge=0){let ye,me,Te,Re,Oe,Ge,Ae,je,_t;const lt=x.isCompressedTexture?x.mipmaps[ge]:x.image;if(q!==null)ye=q.max.x-q.min.x,me=q.max.y-q.min.y,Te=q.isBox3?q.max.z-q.min.z:1,Re=q.min.x,Oe=q.min.y,Ge=q.isBox3?q.min.z:0;else{const mt=Math.pow(2,-V);ye=Math.floor(lt.width*mt),me=Math.floor(lt.height*mt),x.isDataArrayTexture?Te=lt.depth:x.isData3DTexture?Te=Math.floor(lt.depth*mt):Te=1,Re=0,Oe=0,Ge=0}H!==null?(Ae=H.x,je=H.y,_t=H.z):(Ae=0,je=0,_t=0);const rt=re.convert(D.format),Rt=re.convert(D.type);let Se;D.isData3DTexture?(K.setTexture3D(D,0),Se=N.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(K.setTexture2DArray(D,0),Se=N.TEXTURE_2D_ARRAY):(K.setTexture2D(D,0),Se=N.TEXTURE_2D),f.activeTexture(N.TEXTURE0),f.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,D.flipY),f.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),f.pixelStorei(N.UNPACK_ALIGNMENT,D.unpackAlignment);const It=f.getParameter(N.UNPACK_ROW_LENGTH),Ye=f.getParameter(N.UNPACK_IMAGE_HEIGHT),Ht=f.getParameter(N.UNPACK_SKIP_PIXELS),en=f.getParameter(N.UNPACK_SKIP_ROWS),En=f.getParameter(N.UNPACK_SKIP_IMAGES);f.pixelStorei(N.UNPACK_ROW_LENGTH,lt.width),f.pixelStorei(N.UNPACK_IMAGE_HEIGHT,lt.height),f.pixelStorei(N.UNPACK_SKIP_PIXELS,Re),f.pixelStorei(N.UNPACK_SKIP_ROWS,Oe),f.pixelStorei(N.UNPACK_SKIP_IMAGES,Ge);const $n=x.isDataArrayTexture||x.isData3DTexture,it=D.isDataArrayTexture||D.isData3DTexture;if(x.isDepthTexture){const mt=W.get(x),yn=W.get(D),ot=W.get(mt.__renderTarget),bn=W.get(yn.__renderTarget);f.bindFramebuffer(N.READ_FRAMEBUFFER,ot.__webglFramebuffer),f.bindFramebuffer(N.DRAW_FRAMEBUFFER,bn.__webglFramebuffer);for(let Kn=0;Kn<Te;Kn++)$n&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,W.get(x).__webglTexture,V,Ge+Kn),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,W.get(D).__webglTexture,ge,_t+Kn)),N.blitFramebuffer(Re,Oe,ye,me,Ae,je,ye,me,N.DEPTH_BUFFER_BIT,N.NEAREST);f.bindFramebuffer(N.READ_FRAMEBUFFER,null),f.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(V!==0||x.isRenderTargetTexture||W.has(x)){const mt=W.get(x),yn=W.get(D);f.bindFramebuffer(N.READ_FRAMEBUFFER,I),f.bindFramebuffer(N.DRAW_FRAMEBUFFER,X);for(let ot=0;ot<Te;ot++)$n?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,mt.__webglTexture,V,Ge+ot):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,mt.__webglTexture,V),it?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,yn.__webglTexture,ge,_t+ot):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,yn.__webglTexture,ge),V!==0?N.blitFramebuffer(Re,Oe,ye,me,Ae,je,ye,me,N.COLOR_BUFFER_BIT,N.NEAREST):it?N.copyTexSubImage3D(Se,ge,Ae,je,_t+ot,Re,Oe,ye,me):N.copyTexSubImage2D(Se,ge,Ae,je,Re,Oe,ye,me);f.bindFramebuffer(N.READ_FRAMEBUFFER,null),f.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else it?x.isDataTexture||x.isData3DTexture?N.texSubImage3D(Se,ge,Ae,je,_t,ye,me,Te,rt,Rt,lt.data):D.isCompressedArrayTexture?N.compressedTexSubImage3D(Se,ge,Ae,je,_t,ye,me,Te,rt,lt.data):N.texSubImage3D(Se,ge,Ae,je,_t,ye,me,Te,rt,Rt,lt):x.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,ge,Ae,je,ye,me,rt,Rt,lt.data):x.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,ge,Ae,je,lt.width,lt.height,rt,lt.data):N.texSubImage2D(N.TEXTURE_2D,ge,Ae,je,ye,me,rt,Rt,lt);f.pixelStorei(N.UNPACK_ROW_LENGTH,It),f.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Ye),f.pixelStorei(N.UNPACK_SKIP_PIXELS,Ht),f.pixelStorei(N.UNPACK_SKIP_ROWS,en),f.pixelStorei(N.UNPACK_SKIP_IMAGES,En),ge===0&&D.generateMipmaps&&N.generateMipmap(Se),f.unbindTexture()},this.initRenderTarget=function(x){W.get(x).__webglFramebuffer===void 0&&K.setupRenderTarget(x)},this.initTexture=function(x){x.isCubeTexture?K.setTextureCube(x,0):x.isData3DTexture?K.setTexture3D(x,0):x.isDataArrayTexture||x.isCompressedArrayTexture?K.setTexture2DArray(x,0):K.setTexture2D(x,0),f.unbindTexture()},this.resetState=function(){Q=0,Z=0,oe=null,f.reset(),ce.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return an}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Ve._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ve._getUnpackColorSpace()}}var Bp=le.template("<div class=opencodeex-head><span class=opencodeex-title></span><div style=display:flex;gap:2px>"),zp=le.template("<div class=opencodeex-empty><p></p><p class=opencodeex-path>"),Gp=le.template("<ul class=opencodeex-list>"),Hp=le.template("<p class=opencodeex-empty>"),Vp=le.template("<li class=opencodeex-row><button type=button class=opencodeex-item><span class=opencodeex-badge></span><span class=opencodeex-name></span></button><button type=button class=opencodeex-hide>"),Eo=le.template("<div class=opencodeex-backdrop>"),kp=le.template("<div class=opencodeex-context><button type=button class=opencodeex-context-item><span></span></button><button type=button class=opencodeex-context-item><span></span></button><button type=button class=opencodeex-context-item><span>"),Wp=le.template("<div class=opencodeex-panel><div class=opencodeex-resize>"),Xp=le.template("<button type=button class=opencodeex-peek>"),qp=le.template("<div class=opencodeex-context><div class=opencodeex-context-path></div><button type=button class=opencodeex-context-item><span></span></button><button type=button class=opencodeex-context-item><span></span></button><button type=button class=opencodeex-context-item><span>"),Yp=le.template("<canvas class=opencodeex-avatar-canvas>"),$p=le.template("<div class=opencodeex-bubble>"),Kp=le.template("<div class=opencodeex-avatar-card><div class=opencodeex-avatar-actions><button type=button class=opencodeex-avatar-btn></button><button type=button class=opencodeex-avatar-btn>💃</button><button type=button class=opencodeex-avatar-btn>×"),Zp=le.template("<button type=button class=opencodeex-menu-item><span>");const fr=320,yo="opencodeex.dock.open",ds="opencodeex.width",bo="opencodeex.hidden",To="opencodeex.voice",Ao="opencodeex.avatar",wo=i=>i.replace(/[\\/]+$/,"").split(/[\\/]/).pop()||i,Jp=`
#opencodeex-dock{position:fixed;left:0;bottom:0;width:var(--opencodeex-width,320px);z-index:60;display:flex;flex-direction:column;box-sizing:border-box;background:var(--v2-background-bg-base,#171717);border-right:1px solid var(--v2-border-border-base,rgba(127,127,127,.22))}
body.opencodeex-docked main{padding-left:var(--opencodeex-width,320px);box-sizing:border-box}
#opencodeex-peek{position:fixed;left:0;top:45%;z-index:60;display:none}
.opencodeex-peek{display:flex;align-items:center;justify-content:center;width:18px;height:52px;padding:0;border:1px solid rgba(127,127,127,.25);border-left:0;border-radius:0 8px 8px 0;background:var(--v2-background-bg-base,#171717);color:inherit;cursor:pointer;opacity:.7}
.opencodeex-peek:hover{opacity:1}
.opencodeex-resize{position:absolute;top:0;right:-3px;bottom:0;width:6px;cursor:col-resize;z-index:2}
.opencodeex-resize:hover{background:rgba(127,127,127,.28)}
.opencodeex-panel{display:flex;flex-direction:column;gap:6px;height:100%;box-sizing:border-box;padding:10px 8px}
.opencodeex-head{display:flex;align-items:center;justify-content:space-between;gap:8px;padding:2px 6px 4px}
.opencodeex-title{font-size:14px;font-weight:600;line-height:1.2}
.opencodeex-list{display:flex;flex-direction:column;gap:1px;flex:1;overflow:auto;margin:0;padding:0;list-style:none}
.opencodeex-item{display:flex;align-items:center;gap:10px;width:100%;padding:7px 30px 7px 8px;border:0;border-radius:8px;background:transparent;color:inherit;text-align:left;cursor:pointer;font:inherit}
.opencodeex-row{position:relative;display:flex}
.opencodeex-hide{position:absolute;right:5px;top:50%;transform:translateY(-50%);display:flex;align-items:center;justify-content:center;width:22px;height:22px;padding:0;border:0;border-radius:6px;background:transparent;color:inherit;opacity:0;cursor:pointer}
.opencodeex-row:hover .opencodeex-hide{opacity:.5}
.opencodeex-row .opencodeex-hide:hover{opacity:1;background:rgba(127,127,127,.2)}
.opencodeex-item:hover{background:rgba(127,127,127,.12)}
.opencodeex-item[data-current="true"]{background:rgba(127,127,127,.2)}
.opencodeex-badge{display:flex;align-items:center;justify-content:center;flex:none;width:22px;height:22px;border-radius:6px;background:rgba(127,127,127,.22);font-size:11px;font-weight:600;line-height:1}
.opencodeex-name{font-size:13px;font-weight:500;line-height:1.3;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.opencodeex-path{font-size:11px;opacity:.55;word-break:break-all;line-height:1.3}
.opencodeex-empty{padding:12px 8px;opacity:.7;font-size:13px}
.opencodeex-menu-item{display:flex;align-items:center;gap:8px;width:100%;padding:6px 8px;border:0;border-radius:6px;background:transparent;color:inherit;font:inherit;text-align:left;cursor:pointer}
.opencodeex-menu-item:hover{background:rgba(127,127,127,.14)}
.opencodeex-backdrop{position:fixed;inset:0;z-index:90}
.opencodeex-context{position:fixed;z-index:91;min-width:190px;padding:4px;border-radius:8px;background:var(--v2-background-bg-base,#1f1f1f);border:1px solid rgba(127,127,127,.25);box-shadow:0 8px 24px rgba(0,0,0,.35)}
.opencodeex-context-item{display:flex;align-items:center;gap:8px;width:100%;padding:7px 10px;border:0;border-radius:6px;background:transparent;color:inherit;font:inherit;font-size:13px;text-align:left;cursor:pointer}
.opencodeex-context-item:hover{background:rgba(127,127,127,.18)}
.opencodeex-context-path{max-width:280px;padding:6px 10px 4px;font-size:11px;opacity:.55;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
#opencodeex-menu{position:fixed;inset:0;z-index:9998;pointer-events:none}
#opencodeex-menu .opencodeex-backdrop{pointer-events:auto}
#opencodeex-menu .opencodeex-context{pointer-events:auto}
#opencodeex-avatar{position:fixed;right:24px;bottom:24px;z-index:9990;width:220px;pointer-events:none;display:flex;flex-direction:column;align-items:stretch}
.opencodeex-avatar-card{pointer-events:auto;display:flex;flex-direction:column;align-items:center;gap:6px;width:220px}
.opencodeex-avatar-canvas{width:200px;height:220px;display:block;cursor:pointer}
.opencodeex-bubble{max-width:220px;max-height:130px;overflow:auto;padding:8px 10px;border-radius:10px;background:var(--v2-background-bg-base,#1b1b1b);border:1px solid rgba(127,127,127,.25);font-size:12px;line-height:1.45;box-shadow:0 8px 24px rgba(0,0,0,.35)}
.opencodeex-avatar-actions{display:flex;gap:4px}
.opencodeex-avatar-btn{width:26px;height:26px;border-radius:7px;border:1px solid rgba(127,127,127,.25);background:var(--v2-background-bg-base,#1b1b1b);color:inherit;font-size:13px;cursor:pointer;display:flex;align-items:center;justify-content:center;padding:0}
.opencodeex-avatar-btn:hover{background:rgba(127,127,127,.18)}
`,Qp=Zn.Plugin.define({i18n:{en:{title:"Projects",description:"All projects known to this OpenCode server",button:"Projects",command:"Toggle project dock",empty:"No projects yet",error:"Could not load projects",retry:"Retry",refresh:"Refresh",collapse:"Collapse",expand:"Expand",resize:"Drag to resize, double-click to reset",add:"Add project",hidden:"Hidden projects",hide:"Hide",openFolder:"Open folder",revealFolder:"Reveal in Explorer",copyPath:"Copy path",mute:"Mute",unmute:"Unmute",dance:"Dance",hideAvatar:"Hide assistant",avatarCommand:"Toggle assistant",allHidden:"All projects are hidden",current:"Current project"},zh:{title:"项目",description:"当前 OpenCode 服务已知的全部项目",button:"项目",command:"显示/隐藏项目栏",empty:"还没有任何项目",error:"项目列表加载失败",retry:"重试",refresh:"刷新",collapse:"收起",expand:"展开",resize:"拖动调整宽度，双击复位",add:"添加项目",hidden:"已隐藏的项目",hide:"隐藏",openFolder:"打开文件夹",revealFolder:"在资源管理器中定位",copyPath:"复制路径",mute:"静音",unmute:"开启朗读",dance:"跳个舞",hideAvatar:"隐藏助手",avatarCommand:"显示/隐藏助手",allHidden:"项目都已隐藏",current:"当前项目"}},setup(i){console.log(`[opencodeex] gui setup in OpenCode ${i.app.version}`);const e=i.ui;i.add(Zn.Style,Jp);const[t,n]=Qe.createSignal(localStorage.getItem(yo)!=="0"),r=S=>S.name?.trim()||wo(S.canonical),s=S=>{const L=S.icon?.override?.trim();return L&&L.length<=3?L:(r(S)||"?").slice(0,1).toUpperCase()},a=S=>S.icon?.color||void 0,o=()=>{for(const S of i.servers.list())if(i.servers.get(S)?.builtin)return S;return"sidecar"},c=S=>S.canonical.replace(/[\\/]+$/,"").toLowerCase(),l=async S=>{const L=o();try{const de=(await i.client.session.list({directory:S.canonical,limit:20,order:"desc",archived:"false"})).data.find(se=>!se.parentID);if(de){i.tabs.open({server:L,id:de.id},{focus:!0});return}}catch(j){console.error("[opencodeex] session.list failed",j)}i.layout.draft({server:L,directory:S.canonical,prompt:""})},h=()=>{try{const S=JSON.parse(localStorage.getItem(bo)??"[]");return Array.isArray(S)?S.filter(L=>typeof L=="string"):[]}catch{return[]}},[p,d]=Qe.createSignal(h()),g=()=>new Set(p()),v=S=>{d(S),localStorage.setItem(bo,JSON.stringify(S))},A=S=>{const L=c(S);g().has(L)||v([...p(),L])},m=S=>v(p().filter(L=>L!==S)),u=async S=>{if(!i.desktop){await i.system.copy(S.canonical);return}await i.desktop.launch(S.canonical)},w=async S=>{i.desktop&&await i.desktop.reveal(S.canonical)||await i.system.copy(S.canonical)},U=async S=>{await i.system.copy(S.canonical)},M=S=>/^[a-zA-Z]:[\\/]/.test(S)||/^\\\\/.test(S)||S.startsWith("/")&&S.length>1&&!S.startsWith("//"),T=S=>S.replace(/^[("'`<\[]+/,"").replace(/[)"'`>\],.;:]+$/,""),y=S=>{if(S){if(S.startsWith("file://"))try{let L=decodeURIComponent(S.slice(7));return/^\/[a-zA-Z]:/.test(L)&&(L=L.slice(1)),L=L.replace(/\//g,"\\"),M(L)?L:void 0}catch{return}return M(S)?S:void 0}},P=S=>{const L=window.getSelection()?.toString().trim();if(L){const G=T(L);if(M(G))return G}const de=document.caretRangeFromPoint?.(S.clientX,S.clientY),se=de?.startContainer;if(!se||se.nodeType!==Node.TEXT_NODE)return;const ie=se.textContent??"",fe=de?.startOffset??0,Ee=G=>/[\s"'`<>|]/.test(G);let be=fe,R=fe;for(;be>0&&!Ee(ie[be-1]);)be--;for(;R<ie.length&&!Ee(ie[R]);)R++;const J=T(ie.slice(be,R));return M(J)?J:void 0},_=S=>{const L=S.target;if(L instanceof Element){const j=y(L.closest("a")?.getAttribute("href")??null);if(j)return j}return P(S)},E=S=>{const L=S.replace(/[\\/]+$/,""),j=L.split(/[\\/]/).pop()??"";if(!/\.[a-zA-Z0-9]{1,10}$/.test(j))return L;const de=Math.max(L.lastIndexOf("\\"),L.lastIndexOf("/"));return de>0?L.slice(0,de):L},C=async S=>{const L=E(S);i.desktop?await i.desktop.launch(L):await i.system.copy(L)},F=async S=>{i.desktop&&await i.desktop.reveal(S)||await i.system.copy(S)},[O,z]=Qe.createSignal(null),I=S=>{const L=S.target;if(!(L instanceof Element)||L.closest("#opencodeex-dock, #opencodeex-peek, #opencodeex-menu"))return;const j=_(S);j&&(S.preventDefault(),S.stopPropagation(),z({x:Math.min(S.clientX,window.innerWidth-250),y:Math.min(S.clientY,window.innerHeight-170),path:j}))};function X(){const[S,L]=Qe.createSignal(),[j,de]=Qe.createSignal(),se=()=>{de(void 0),L(void 0),i.client.project.list().then(J=>{const G=new Map;for(const re of J){const ce=re.canonical.replace(/[\\/]+$/,"").toLowerCase();G.has(ce)||G.set(ce,re)}L([...G.values()])}).catch(J=>de(J instanceof Error?J.message:String(J)))};Qe.onMount(se);const[ie,fe]=Qe.createSignal(null),Ee=(J,G)=>{J.preventDefault(),J.stopPropagation();const re=Math.min(J.clientX,window.innerWidth-220),ce=Math.min(J.clientY,window.innerHeight-150);fe({x:re,y:ce,project:G})},be=()=>fe(null);Qe.onMount(()=>{const J=G=>{G.key==="Escape"&&be()};window.addEventListener("keydown",J),Qe.onCleanup(()=>window.removeEventListener("keydown",J))});const R=J=>{const G=i.sessions.current()?.directory;return G?G.replace(/[\\/]+$/,"").toLowerCase()===J.canonical.replace(/[\\/]+$/,"").toLowerCase():!1};return[(()=>{var J=Bp(),G=J.firstChild,re=G.nextSibling;return le.insert(G,()=>i.t("title")),le.insert(re,le.createComponent(Qe.Show,{get when(){return p().length>0},get children(){return le.createComponent(e.Menu,{get label(){return i.t("hidden")},trigger:"icon",icon:"outline-eye-slash",placement:"bottom-end",get items(){return p().map(ce=>({label:wo(ce),icon:"arrow-undo-down",onSelect:()=>m(ce)}))}})}}),null),le.insert(re,le.createComponent(e.IconButton,{icon:"plus",get label(){return i.t("add")},size:"small",onClick:()=>i.layout.project(o(),i.t("title"))}),null),le.insert(re,le.createComponent(e.IconButton,{icon:"refresh",get label(){return i.t("refresh")},size:"small",onClick:se}),null),le.insert(re,le.createComponent(e.IconButton,{icon:"chevron-left",get label(){return i.t("collapse")},size:"small",onClick:()=>n(!1)}),null),J})(),le.createComponent(Qe.Show,{get when(){return!j()},get fallback(){return(()=>{var J=zp(),G=J.firstChild,re=G.nextSibling;return le.insert(G,()=>i.t("error")),le.insert(re,j),le.insert(J,le.createComponent(e.Button,{variant:"neutral",size:"small",onClick:se,get children(){return i.t("retry")}}),null),J})()},get children(){return le.createComponent(Qe.Show,{get when(){return S()},get fallback(){return le.createComponent(e.Loader,{size:"large"})},children:J=>{const G=()=>J().filter(re=>!g().has(c(re)));return le.createComponent(Qe.Show,{get when(){return G().length>0},get fallback(){return(()=>{var re=Hp();return le.insert(re,(()=>{var ce=le.memo(()=>J().length>0);return()=>ce()?i.t("allHidden"):i.t("empty")})()),re})()},get children(){var re=Gp();return le.insert(re,le.createComponent(Qe.For,{get each(){return G()},children:ce=>(()=>{var ee=Vp(),Me=ee.firstChild,_e=Me.firstChild,Xe=_e.nextSibling,De=Me.nextSibling;return ee.$$contextmenu=Je=>Ee(Je,ce),Me.$$click=()=>{l(ce)},le.insert(_e,()=>s(ce)),le.insert(Xe,()=>r(ce)),De.$$click=Je=>{Je.stopPropagation(),A(ce)},le.insert(De,le.createComponent(e.Icon,{name:"xmark-small",size:"small"})),le.effect(Je=>{var dt=R(ce),In=R(ce)?i.t("current"):ce.canonical,xi=a(ce)?{"background-color":a(ce)}:void 0,Un=i.t("hide");return dt!==Je.e&&le.setAttribute(Me,"data-current",Je.e=dt),In!==Je.t&&le.setAttribute(Me,"title",Je.t=In),Je.a=le.style(_e,xi,Je.a),Un!==Je.o&&le.setAttribute(De,"title",Je.o=Un),Je},{e:void 0,t:void 0,a:void 0,o:void 0}),ee})()})),re}})}})}}),le.createComponent(Qe.Show,{get when(){return ie()},children:J=>[(()=>{var G=Eo();return G.$$contextmenu=re=>{re.preventDefault(),be()},G.$$mousedown=be,G})(),(()=>{var G=kp(),re=G.firstChild,ce=re.firstChild,ee=re.nextSibling,Me=ee.firstChild,_e=ee.nextSibling,Xe=_e.firstChild;return re.$$click=()=>{u(J().project),be()},le.insert(re,le.createComponent(e.Icon,{name:"folder",size:"small"}),ce),le.insert(ce,()=>i.t("openFolder")),ee.$$click=()=>{w(J().project),be()},le.insert(ee,le.createComponent(e.Icon,{name:"select-element",size:"small"}),Me),le.insert(Me,()=>i.t("revealFolder")),_e.$$click=()=>{U(J().project),be()},le.insert(_e,le.createComponent(e.Icon,{name:"copy",size:"small"}),Xe),le.insert(Xe,()=>i.t("copyPath")),le.effect(De=>{var Je=`${J().x}px`,dt=`${J().y}px`;return Je!==De.e&&le.setStyleProperty(G,"left",De.e=Je),dt!==De.t&&le.setStyleProperty(G,"top",De.t=dt),De},{e:void 0,t:void 0}),G})()]})]}const Q=()=>{const S=Number(localStorage.getItem(ds));return Number.isFinite(S)&&S>=220&&S<=560?S:fr},[Z,oe]=Qe.createSignal(Q()),Y=S=>{document.body.style.setProperty("--opencodeex-width",`${S}px`)};let te=!1;const ae=S=>{S.preventDefault(),te=!0,S.currentTarget.setPointerCapture(S.pointerId)},Ce=S=>{if(!te)return;const L=Math.min(560,Math.max(220,S.clientX));Y(L),oe(L)},we=S=>{te&&(te=!1,localStorage.setItem(ds,String(Z())),S.currentTarget.releasePointerCapture?.(S.pointerId))},tt=()=>{Y(fr),oe(fr),localStorage.setItem(ds,String(fr))},Ne=document.createElement("div");Ne.id="opencodeex-dock";const qe=le.render(()=>(()=>{var S=Wp(),L=S.firstChild;return le.insert(S,le.createComponent(X,{}),L),L.$$dblclick=tt,L.addEventListener("pointercancel",we),L.$$pointerup=we,L.$$pointermove=Ce,L.$$pointerdown=ae,le.effect(()=>le.setAttribute(L,"title",i.t("resize"))),S})(),Ne),$=document.createElement("div");$.id="opencodeex-peek";const ne=le.render(()=>(()=>{var S=Xp();return S.$$click=()=>n(!0),le.insert(S,le.createComponent(e.Icon,{name:"chevron-right",size:"small"})),le.effect(()=>le.setAttribute(S,"title",i.t("expand"))),S})(),$),xe=document.createElement("div");xe.id="opencodeex-menu";const Le=le.render(()=>le.createComponent(Qe.Show,{get when(){return O()},children:S=>[(()=>{var L=Eo();return L.$$contextmenu=j=>{j.preventDefault(),z(null)},L.$$mousedown=()=>z(null),L})(),(()=>{var L=qp(),j=L.firstChild,de=j.nextSibling,se=de.firstChild,ie=de.nextSibling,fe=ie.firstChild,Ee=ie.nextSibling,be=Ee.firstChild;return le.insert(j,()=>S().path),de.$$click=()=>{C(S().path),z(null)},le.insert(de,le.createComponent(e.Icon,{name:"folder",size:"small"}),se),le.insert(se,()=>i.t("openFolder")),ie.$$click=()=>{F(S().path),z(null)},le.insert(ie,le.createComponent(e.Icon,{name:"select-element",size:"small"}),fe),le.insert(fe,()=>i.t("revealFolder")),Ee.$$click=()=>{i.system.copy(S().path),z(null)},le.insert(Ee,le.createComponent(e.Icon,{name:"copy",size:"small"}),be),le.insert(be,()=>i.t("copyPath")),le.effect(R=>{var J=`${S().x}px`,G=`${S().y}px`,re=S().path;return J!==R.e&&le.setStyleProperty(L,"left",R.e=J),G!==R.t&&le.setStyleProperty(L,"top",R.t=G),re!==R.a&&le.setAttribute(j,"title",R.a=re),R},{e:void 0,t:void 0,a:void 0}),L})()]}),xe),[ve,Fe]=Qe.createSignal(""),[ct,ze]=Qe.createSignal(localStorage.getItem(To)!=="0"),[He,nt]=Qe.createSignal(localStorage.getItem(Ao)!=="0");let Ue;const st=S=>S.replace(/```[\s\S]*?```/g,"，代码块，").replace(/`([^`]+)`/g,"$1").replace(/!\[[^\]]*\]\([^)]*\)/g,"").replace(/\[([^\]]*)\]\([^)]*\)/g,"$1").replace(/^#{1,6}\s*/gm,"").replace(/[*_>~|]/g,"").replace(/\s+/g," ").trim(),gt=S=>{if(!("speechSynthesis"in window))return;speechSynthesis.cancel();const L=new SpeechSynthesisUtterance(S.slice(0,400));L.lang="zh-CN",L.rate=1.05,L.pitch=1.1;const j=speechSynthesis.getVoices(),de=j.find(se=>se.lang.toLowerCase().startsWith("zh"))??j.find(se=>se.default);de&&(L.voice=de),L.onstart=()=>Ue?.("talk"),speechSynthesis.speak(L)},wt=S=>{const L=st(S);Fe(L.length>240?`${L.slice(0,240)}…`:L),Ue?.("talk"),ct()&&gt(L)};let at="";const ht=async()=>{const S=i.sessions.current();if(S)try{const j=[...await i.client.session.context({sessionID:S.id})].reverse().find(se=>se.type==="assistant"&&se.content?.some(ie=>ie.type==="text"&&ie.text?.trim()));if(!j||j.id===at)return;const de=(j.content??[]).filter(se=>se.type==="text").map(se=>se.text??"").join(`
`).trim();if(!de)return;at=j.id,wt(de)}catch(L){console.error("[opencodeex] avatar read failed",L)}};Zn.createKeyed(()=>i.servers.get(o())?.data,S=>Qe.onCleanup(S.on("session.idle",()=>{ht()})));const N=()=>{const S=["dance","wave","turn"];return S[Math.floor(Math.random()*S.length)]},St=()=>{const S=!ct();ze(S),localStorage.setItem(To,S?"1":"0"),!S&&"speechSynthesis"in window&&speechSynthesis.cancel()};function Ze(){let S,L=0,j;return Qe.onMount(()=>{const de=S.clientWidth||200,se=S.clientHeight||220;j=new Op({canvas:S,alpha:!0,antialias:!0}),j.setPixelRatio(Math.min(window.devicePixelRatio,2)),j.setSize(de,se,!1);const ie=new pc,fe=new Wt(32,de/se,.1,20);fe.position.set(0,1.35,3.4),fe.lookAt(0,1,0),ie.add(new Nc(16777215,1.2));const Ee=new Za(16777215,1.7);Ee.position.set(2,4,3),ie.add(Ee);const be=new Za(8037119,.9);be.position.set(-3,2,-2),ie.add(be);const R=bt=>new ns({color:bt,roughness:.55,metalness:.08}),J=new Vn;ie.add(J);const G=new Tt(new Pi(.3,.45,8,20),R(7252222));G.position.y=.72,J.add(G);const re=new Tt(new Li(.3,32,24),R(15922943));re.position.y=1.32,J.add(re);const ce=new ns({color:1778752,roughness:.2});for(const bt of[-.11,.11]){const ft=new Tt(new Li(.05,16,12),ce);ft.position.set(bt,1.36,.26),J.add(ft)}const ee=new Tt(new ha(.015,.015,.18),R(10336511));ee.position.y=1.66,J.add(ee);const Me=new Tt(new Li(.05,16,12),new ns({color:16756782,emissive:16746496,emissiveIntensity:.8}));Me.position.y=1.77,J.add(Me);const _e=new Pi(.08,.38,6,12),Xe=R(6001648),De=new Vn;De.position.set(-.36,1.02,0);const Je=new Tt(_e,Xe);Je.position.y=-.24,De.add(Je),J.add(De);const dt=new Vn;dt.position.set(.36,1.02,0);const In=new Tt(_e,Xe);In.position.y=-.24,dt.add(In),J.add(dt);const xi=new Pi(.09,.3,6,12),Un=R(4156374);for(const bt of[-.14,.14]){const ft=new Tt(xi,Un);ft.position.set(bt,.18,0),J.add(ft)}let qt="idle",vi=performance.now();const Hi={idle:Number.POSITIVE_INFINITY,talk:3,wave:2.2,dance:4.5,turn:1.4};Ue=bt=>{qt=bt,vi=performance.now()};const Vi=new Bc,jt=()=>{const bt=Vi.getElapsedTime(),ft=(performance.now()-vi)/1e3;ft>Hi[qt]&&(qt="idle",vi=performance.now()),J.position.y=Math.sin(bt*2)*.02,J.rotation.y*=.92,re.rotation.set(0,0,0),De.rotation.set(0,0,.14+Math.sin(bt*2)*.05),dt.rotation.set(0,0,-.14-Math.sin(bt*2)*.05),qt==="wave"?dt.rotation.z=-2.3+Math.sin(ft*9)*.35:qt==="dance"?(J.rotation.y=Math.sin(ft*3.2)*.8,J.position.y=Math.abs(Math.sin(ft*6.4))*.18,De.rotation.z=.9+Math.sin(ft*6.4)*.9,dt.rotation.z=-.9-Math.sin(ft*6.4)*.9,re.rotation.z=Math.sin(ft*3.2)*.12):qt==="turn"?J.rotation.y=ft*Math.PI*2:qt==="talk"&&(re.rotation.x=Math.sin(ft*7)*.08,dt.rotation.z=-.55+Math.sin(ft*3.2)*.25),j?.render(ie,fe),L=requestAnimationFrame(jt)};jt();const Yn=new ResizeObserver(()=>{const bt=S.clientWidth||de,ft=S.clientHeight||se;j?.setSize(bt,ft,!1),fe.aspect=bt/ft,fe.updateProjectionMatrix()});Yn.observe(S),Qe.onCleanup(()=>{Yn.disconnect(),cancelAnimationFrame(L),j?.dispose(),Ue=void 0})}),(()=>{var de=Yp();de.$$click=()=>{"speechSynthesis"in window&&speechSynthesis.resume(),Ue?.(N())};var se=S;return typeof se=="function"?le.use(se,de):S=de,de})()}const b=document.createElement("div");b.id="opencodeex-avatar";const f=le.render(()=>(()=>{var S=Kp(),L=S.firstChild,j=L.firstChild,de=j.nextSibling,se=de.nextSibling;return le.insert(S,le.createComponent(Qe.Show,{get when(){return ve()},get children(){var ie=$p();return le.insert(ie,ve),ie}}),L),le.insert(S,le.createComponent(Ze,{}),L),j.$$click=St,le.insert(j,()=>ct()?"🔊":"🔇"),de.$$click=()=>Ue?.("dance"),se.$$click=()=>nt(!1),le.effect(ie=>{var fe=He()?"flex":"none",Ee=ct()?i.t("mute"):i.t("unmute"),be=i.t("dance"),R=i.t("hideAvatar");return fe!==ie.e&&le.setStyleProperty(S,"display",ie.e=fe),Ee!==ie.t&&le.setAttribute(j,"title",ie.t=Ee),be!==ie.a&&le.setAttribute(de,"title",ie.a=be),R!==ie.o&&le.setAttribute(se,"title",ie.o=R),ie},{e:void 0,t:void 0,a:void 0,o:void 0}),S})(),b);Qe.createEffect(()=>localStorage.setItem(Ao,He()?"1":"0"));const B=()=>{const S=document.querySelector("main");Ne.style.top=`${S?Math.round(S.getBoundingClientRect().top):44}px`;const L=window.devicePixelRatio||1,j=window.screen,de=j.width>window.innerWidth*1.1?j.width/L:j.width,se=j.height>window.innerHeight*1.1?j.height/L:j.height,ie=Math.max(0,Math.min(window.innerWidth,de-window.screenX)),fe=Math.max(0,Math.min(window.innerHeight,se-window.screenY));b.style.right=`${24+Math.max(0,window.innerWidth-ie)}px`,b.style.bottom=`${24+Math.max(0,window.innerHeight-fe)}px`},W=()=>{const S=t();Ne.style.display=S?"flex":"none",$.style.display=S?"none":"block",document.body.classList.toggle("opencodeex-docked",S),localStorage.setItem(yo,S?"1":"0"),S&&B()},K=S=>{S.key==="Escape"&&z(null)};Qe.onMount(()=>{Y(Z()),document.body.appendChild(Ne),document.body.appendChild($),document.body.appendChild(xe),document.documentElement.appendChild(b),W(),B(),window.addEventListener("resize",B),document.addEventListener("contextmenu",I,!0),document.addEventListener("keydown",K)}),Qe.createEffect(()=>Y(Z())),Qe.createEffect(W);const ue=new Set;Qe.createEffect(()=>{const S=i.sessions.current();if(!(!S||ue.has(S.key))){ue.add(S.key);try{i.layout.close(`${i.id}:projects`,S)}catch{}}}),Qe.onCleanup(()=>{window.removeEventListener("resize",B),document.removeEventListener("contextmenu",I,!0),document.removeEventListener("keydown",K),document.body.classList.remove("opencodeex-docked"),document.body.style.removeProperty("--opencodeex-width"),qe(),ne(),Le(),f(),Ne.remove(),$.remove(),xe.remove(),b.remove()});const he=()=>n(S=>!S);i.add(Zn.TitlebarItem,()=>({id:"projects",label:i.t("button"),title:i.t("title"),icon:"layout-left",pressed:t(),run:he})),i.add(Zn.Command,()=>({id:"projects",title:i.t("command"),description:i.t("description"),keywords:"project workspace dock sidebar 项目 侧边栏",section:"navigation",bind:"mod+alt+p",run:he})),i.add(Zn.Slot,{at:"session.location.menu",order:-10,render:S=>le.createComponent(Qe.Show,{get when(){return S.shown},get children(){var L=Zp(),j=L.firstChild;return L.$$click=he,le.insert(L,le.createComponent(e.Icon,{name:"layout-left",size:"small"}),j),le.insert(j,()=>i.t("title")),L}})})}});le.delegateEvents(["contextmenu","click","mousedown","pointerdown","pointermove","pointerup","dblclick"]);exports.default=Qp;
