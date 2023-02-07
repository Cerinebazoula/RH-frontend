import React from "react";
import styles from "../styles/Home.module.css";
import profile_picture from "../assets/images/profile_image.jpg";
import chart from "../assets/images/chart.png";
import percent from "../assets/images/percentage.png";
import Scrollbar from "../components/Scrollbar"
export default function Home() {
  return <div className="w-full h-full">
    <Scrollbar>
  
    <div className={styles.main}>
      <div className={styles.top_bar}>
        <div className={styles.icons}>
          <div className={styles.circle}></div>
          <div className={styles.circle}></div>
          <div className={styles.circle}></div>
          <div className={styles.bell}><svg width="32" height="40" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path fill-rule="evenodd" d="M17.9999 2C17.9999 0.89543 17.1044 0 15.9999 0C14.8953 0 13.9999 0.89543 13.9999 2V3.5H12.885C8.4349 3.5 4.7517 6.96002 4.47391 11.4015L4.03191 18.4684C3.86338 21.1628 2.95881 23.7593 1.41669 25.9752C0.0233217 27.9773 1.26376 30.7424 3.68562 31.0331L10.4999 31.8508V34C10.4999 37.0376 12.9623 39.5 15.9999 39.5C19.0374 39.5 21.4999 37.0376 21.4999 34V31.8508L28.3141 31.0331C30.736 30.7424 31.9764 27.9773 30.583 25.9752C29.0409 23.7593 28.1364 21.1628 27.9678 18.4684L27.5258 11.4015C27.248 6.96003 23.5648 3.5 19.1147 3.5H17.9999V2ZM12.885 6.5C10.019 6.5 7.64697 8.72834 7.46806 11.5888L7.02605 18.6557C6.82327 21.8979 5.73475 25.0224 3.87906 27.6888C3.77835 27.8335 3.868 28.0334 4.04306 28.0544L11.5184 28.9515C14.4954 29.3087 17.5044 29.3087 20.4814 28.9515L27.9567 28.0544C28.1317 28.0334 28.2214 27.8336 28.1207 27.6888C26.265 25.0224 25.1765 21.8979 24.9737 18.6557L24.5317 11.5888C24.3528 8.72834 21.9807 6.5 19.1147 6.5H12.885ZM15.9999 36.5C14.6192 36.5 13.4999 35.3807 13.4999 34V32.5H18.4999V34C18.4999 35.3807 17.3806 36.5 15.9999 36.5Z"/>
               </svg>
          </div>
        </div>

        <div className={styles.welcome}>
          <div className={styles.hello}>Hello</div>
          <div className={styles.name}>Nom Prenom</div>
        </div>
      </div>

      <div className={styles.content}>

          <div className={styles.top_data}>
            <div className={styles.mini_block}><img src={percent} alt="percentage" /></div>
            <div className={styles.mini_block}><div className={styles.bignumber}>600</div><div className={styles.text}>members</div></div>
            <div className={styles.mini_block}><div className={styles.title}>member of the month</div><div className={styles.profilepic}><img src={profile_picture} alt="profile_picture" /></div><div className={styles.text}>Nom Prenom</div></div>
            <div className={styles.mini_block}><div className={styles.button}>check</div></div>
            
          </div>

          <div className={styles.middle_data}>
            <div className={styles.chart}><img src={chart} alt="chart" /></div>
            <div className={styles.todo_list}>
              <div className={styles.bigtitle}>Todo List</div>
              <div className={styles.checkblock}><input type="checkbox" className={styles.check} /><input type="text" value="Adding new member profiles" className={styles.textinput}/></div>
              <div className={styles.checkblock}><input type="checkbox" className={styles.check} /><input type="text" className={styles.textinput}/></div>
              <div className={styles.checkblock}><input type="checkbox" className={styles.check} /><input type="text" className={styles.textinput}/></div>
              <div className={styles.checkblock}><input type="checkbox" className={styles.check} /><input type="text" className={styles.textinput}/></div>
              <div className={styles.checkblock}><input type="checkbox" className={styles.check} /><input type="text" className={styles.textinput}/></div>
              <div className={styles.plusbutton}>+</div>
            </div>
          </div>

          <div className={styles.bottom_data}>
            <div className={styles.mini_block}><div className={styles.bignumber}>4</div><div className={styles.button}>Tickets</div></div>
            <div className={styles.mini_block}><div className={styles.bignumber}>10</div><div className={styles.button}>Tasks</div></div>
            <div className={styles.mini_block}><div className={styles.bignumber}>88</div><div className={styles.text}>Events</div></div>
            <div className={styles.mini_block}><div className={styles.bignumber}>2k</div><div className={styles.text}>Participants</div></div>
          </div>

      </div>
    </div>
    </Scrollbar>
  </div>
  ;
}
