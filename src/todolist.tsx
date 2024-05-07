import { FC } from "react"
import { Listitem, Props as itemProps } from './listitem';

export type Role = itemProps;


interface Props {
  roles: Role[];
}



// eslint-disable-next-line react-refresh/only-export-components
export const Todolist: FC<Props> = ({roles}) => {

  const highPriorityRoles = roles.filter(r => r.priority === 0);
  const meduinPriorityRoles = roles.filter(r => r.priority === 1);
  const lowPriorityRoles = roles.filter(r => r.priority === 2);
  return (
  <div className="todolistmenu">
    <h1 className="todolistmenuTitle">Todolistmenu</h1>
      <div className="title-high">
        <h3 className="title">High</h3>
        <div className="Highlist is=3">
          
            {highPriorityRoles.map(r => (
              <div className="Highlistmenu "  key={r.title}>
                <div className="high ">
                  <Listitem {...r} />
                </div>
              </div>
            ))}
        </div>
      </div>
      <div className="title-meduin">
        <h3 className="title">Meduin</h3>
        <div className="meduinlist is=3">
              {meduinPriorityRoles.map(r => (
                <div className="meduinlistmenu " key={r.title}>
                  <div className="meduin">
                    <Listitem {...r} />
                  </div>
                </div>
              ))}
        </div>
      </div>
      <div className="title-low">
        <h3 className="title">Low</h3>
            <div className="lowlist is=3">
            {lowPriorityRoles.map(r => (
              <div className="lowlistmenu " key={r.title}>
                <div className="low">
                  <Listitem {...r} />
                </div>
              </div>
            ))}
            </div>
       </div>
  </div>
  
  )
}