import { type ReactNode } from "react";

type HintBoxProps = {
  mode:'hint',
  children:ReactNode
}

type WarningBoxProps = {
  mode:'warning',
  badge?:'low' | 'medium' | 'high',
  children:ReactNode
}

type InfoBoxProps = HintBoxProps | WarningBoxProps;

function InfoBox(props:InfoBoxProps){
  const {mode,children}=props;

  if(mode === 'hint'){
    return <aside className="infobox infobox-hint">
            <p>{children}</p>
          </aside>
  }

  const {badge}=props;
  return <aside className={`infobox infobox-warning warning--${badge}`}>
          <h2>Warning</h2>
          <p>{children}</p>
        </aside>
}
export default InfoBox;