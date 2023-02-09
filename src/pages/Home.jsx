import React from "react";
import styles from "../styles/Home.module.css";
import profile_picture from "../assets/images/profile_image.jpg";
import chart from "../assets/images/chart.png";
import percent from "../assets/images/percentage.png";
import Scrollbar from "../components/Scrollbar";
import Notifications from "..//components/Notifications";
export default function Home() {
  return (
    <div className="w-full h-full">
      <Scrollbar>
        <div className={styles.main}>
          <div className={styles.top_bar}>
            <Notifications color="white" />
            <div className={styles.welcome}>
              <div className={styles.hello}>Hello</div>
              <div className={styles.name}>Nom Prenom</div>
            </div>
          </div>

          <div className={styles.content}>
            <div className={styles.top_data}>
              <div className={styles.mini_block}>
                <img src={percent} alt="percentage" />
              </div>
              <div className={styles.mini_block}>
                <div className={styles.bignumber}>600</div>
                <div className={styles.text}>members</div>
              </div>
              <div className={styles.mini_block}>
                <div className={styles.title}>member of the month</div>
                <div className={styles.profilepic}>
                  <img src={profile_picture} alt="profile_picture" />
                </div>
                <div className={styles.text}>Nom Prenom</div>
              </div>
              <div className={styles.mini_block}>
                <div className={styles.button}>check</div>
              </div>
            </div>

            <div className={styles.middle_data}>
              <div className={styles.chart}>
                <img src={chart} alt="chart" />
              </div>
              <div className={styles.todo_list}>
                <div className={styles.bigtitle}>Todo List</div>
                <div className={styles.checkblock}>
                  <input type="checkbox" className={styles.check} />
                  <input
                    type="text"
                    value="Adding new member profiles"
                    className={styles.textinput}
                  />
                </div>
                <div className={styles.checkblock}>
                  <input type="checkbox" className={styles.check} />
                  <input type="text" className={styles.textinput} />
                </div>
                <div className={styles.checkblock}>
                  <input type="checkbox" className={styles.check} />
                  <input type="text" className={styles.textinput} />
                </div>
                <div className={styles.checkblock}>
                  <input type="checkbox" className={styles.check} />
                  <input type="text" className={styles.textinput} />
                </div>
                <div className={styles.checkblock}>
                  <input type="checkbox" className={styles.check} />
                  <input type="text" className={styles.textinput} />
                </div>
                <div className={styles.plusbutton}>+</div>
              </div>
            </div>

            <div className={styles.bottom_data}>
              <div className={styles.mini_block}>
                <div className={styles.bignumber}>4</div>
                <div className={styles.button}>Tickets</div>
              </div>
              <div className={styles.mini_block}>
                <div className={styles.bignumber}>10</div>
                <div className={styles.button}>Tasks</div>
              </div>
              <div className={styles.mini_block}>
                <div className={styles.bignumber}>88</div>
                <div className={styles.text}>Events</div>
              </div>
              <div className={styles.mini_block}>
                <div className={styles.bignumber}>2k</div>
                <div className={styles.text}>Participants</div>
              </div>
            </div>
          </div>
        </div>
      </Scrollbar>
    </div>
  );
}
