declare global {
  interface Window {
    __REACT_DEVTOOLS_GLOBAL_HOOK__?: {
      registerRenderer?: (...args: unknown[]) => unknown;
    };
  }
}

const hook = typeof window !== "undefined" ? window.__REACT_DEVTOOLS_GLOBAL_HOOK__ : undefined;

if (hook && typeof hook.registerRenderer === "function") {
  const originalRegister = hook.registerRenderer;

  hook.registerRenderer = function patchedRegisterRenderer(renderer: any, ...rest: unknown[]) {
    if (renderer && (renderer.version === "" || renderer.version == null)) {
      renderer.version = "0.0.0";
    }
    return originalRegister.call(this, renderer, ...rest);
  };
}

export {};
