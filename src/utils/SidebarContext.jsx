import { createContext, useState } from "react";

// CREATING CONTEXT API
export const SidebarContext = createContext(null);

const SidebarContextWrapper = (props) => {
  // DECLARING STATE FOR DATA TO BE MANAGED
  const [expanded, setExpanded] = useState(true);

  return (
    // PASSING DATA STATE GETTER & SETTER AS CONTEXT VALUE
    <SidebarContext.Provider value={[expanded, setExpanded]}>
      {/* {/ WRAPPING UP CHILD COMPONENT INSIDE CONTEXT /} */}
      {props.children}
    </SidebarContext.Provider>
  );
};

export default SidebarContextWrapper;
