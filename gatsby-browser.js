// import {wrapRootElement as wrap} from './root-wrapper'
// export const wrapRootElement = wrap
// require('prismjs/themes/prism.css')

import React, { useState, useEffect } from "react";
import { checkSession } from "./src/utils/auth";

const SessionCheck = ({ children }) => {
  const [loading, stillLoading] = useState(true);
  useEffect(() => checkSession(() => stillLoading(false)));
  return loading === false && <>{children}</>;
};

export const wrapRootElement = ({ element }) => {
  return <SessionCheck >{element}</SessionCheck>;
};
