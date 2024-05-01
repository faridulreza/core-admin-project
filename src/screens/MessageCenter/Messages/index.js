import React, { useEffect, useState } from "react";
import cn from "classnames";
import styles from "./Messages.module.sass";
import Panel from "./Panel";
import Send from "./Send";
import DocumentWorkflow from "../DocumentWorkflow";
import PrebuildTemplate from "../PrebuildTemplate";
import ChatUi from "../ChatUi/ChatUi";
import FinancialApp from "../FinancialApp";
import Loader from "../../../components/Loader";

const Messages = ({
  className,
  visible,
  setVisible,
  actions,
  parameters,
  messages,
  selectedUser,
  setSelectedUser,
  items,
}) => {
  const [clickedMessage, setClickedMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={cn(className, styles.messages, { [styles.show]: visible })}>
      <Panel
        items={items}
        setSelectedUser={setSelectedUser}
        selectedUser={selectedUser}
        actions={actions}
        parameters={parameters}
        setVisible={setVisible}
      />
      <div className={styles.wrapper}>
        {/* <button className={cn("button-stroke button-small", styles.button)}>
          Load conversation
        </button> */}

        <div className={styles.list}>
          {clickedMessage === null && (
            <div
              style={{
                paddingTop: "40px",
              }}
            >
              <div style={{}} className={cn("h4", styles.title)}>
                Lets build your first financial app?
              </div>
              <div
                style={{
                  paddingBottom: "20px",
                }}
                className={styles.paragraph}
              >
                Lets build your first financial app?
              </div>
              <div
                style={{
                  display: "flex",
                  gap: "20px",
                  width: "100%",
                }}
                className={styles.boxWrapper}
              >
                <div
                  style={{
                    display: "flex",
                    width: "100%",
                    flexDirection: "column",
                    gap: "20px",
                  }}
                >
                  {/* <p style={{}} className={styles.paragraph}>
                    Automate Document Processing: Train Financio to process
                    receiving or extraction of financial documents from
                    different sources. Reading those documents to extract data,
                    data processing and verification, followed by result
                    presentation.
                  </p> */}
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "20px",
                      padding: "20px",
                    }}
                    className={styles.boxContainer}
                  >
                    {/* <button
                      onClick={() => setClickedMessage(true)}
                      className={cn("button", styles.buttonAi)}
                      style={{
                        paddingLeft: "20px",
                        width: "100%",
                        paddingRight: "20px",
                      }}
                    >
                      Use a pre-built document processing workflow
                    </button> */}
                    <button
                      onClick={() => setClickedMessage("pre-build")}
                      className={cn("button", styles.buttonAi)}
                      style={{
                        paddingLeft: "20px",
                        width: "100%",
                        paddingRight: "20px",
                      }}
                    >
                      Choose from pre-build app template
                    </button>
                  </div>
                </div>
                {/* <div className={styles.divider} style={{}}></div> */}
                <div
                  style={{
                    display: "flex",
                    width: "100%",
                    flexDirection: "column",
                    gap: "20px",
                  }}
                >
                  {/* <p style={{}} className={styles.paragraph}>
                    Automate any Financial workflow: Train Financio to automate
                    tasks, routing work items, setting up approval processes,
                    and integrating with various systems to streamline
                    end-to-end processes.
                  </p> */}
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "20px",
                      padding: "20px",
                    }}
                    className={styles.boxContainer}
                  >
                    {/* <button
                      onClick={() => setClickedMessage(true)}
                      className={cn("button", styles.buttonAi)}
                      style={{
                        paddingLeft: "20px",
                        width: "100%",
                        paddingRight: "20px",
                      }}
                    >
                      Use a pre-built Financial workflow template.
                    </button> */}
                    <button
                      onClick={() => setClickedMessage("financial-app")}
                      className={cn("button", styles.buttonAi)}
                      style={{
                        paddingLeft: "20px",
                        width: "100%",
                        paddingRight: "20px",
                      }}
                    >
                      Build a new financial app
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
          {/* {messages.map((x, index) => (
            <Message item={x} key={index} />
          ))} */}
          {clickedMessage === "financial-app" && (
            <FinancialApp isLoading={isLoading} />
          )}
          {clickedMessage === "pre-build" && (
            <PrebuildTemplate setClickedMessage={setClickedMessage} />
          )}
        </div>
        <Send />
        {clickedMessage === "financial-app" && isLoading && (
          <div className={styles.foot}>
            <button
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "20px",
              }}
              className={cn("button-stroke button-small")}
            >
              <Loader className={styles.loader} />
              <span>Building your workflow</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Messages;
