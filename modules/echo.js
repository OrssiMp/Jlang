if (typeof window !== "undefined" && typeof Element !== "undefined") {
    if (!("echo" in Element.prototype)) {
  Object.defineProperty(Element.prototype, "echo", {
    value: function (...args) {
      if (!this instanceof Element) {
        throw new Error("echo must be to call on DOM element");
      }
      this.inserAdjacentHTML("beforeend",`<div>${args.join(" ")}</div>`)
    },
    enumerable:false,
    configurable:true
  });
}

 function echoIN(target,...args){
    Target.echo(...args)
}
    
}

