const firebaseConfig = {
  apiKey: "AIzaSyBEqOzr_gQZtSac6Y_QVosAV70jYx8KlX8",
  authDomain: "daily-tasks-ef05b.firebaseapp.com",
  databaseURL: "https://daily-tasks-ef05b-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "daily-tasks-ef05b",
  storageBucket: "daily-tasks-ef05b.firebasestorage.app",
  messagingSenderId: "62114432203",
  appId: "1:62114432203:web:e3bda2553a9fa4020d474e",
  measurementId: "G-EPGHH3PCZM"
};
firebase.initializeApp(firebaseConfig);
const db = firebase.database();

function loadData() {
  const tbody = document.querySelector("#dataTable tbody");
  tbody.innerHTML = "";
  db.ref("dailyTasks").once("value", (snapshot) => {
    const res = snapshot.val();
    const list = res ? Object.values(res) : [];
    list.reverse().forEach((row) => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td>${row.date}</td>
        <td>${row.number}</td>
        <td>${row.fusions}</td>
        <td>${row.pixels}</td>
        <td>${row.coreFrom}-${row.coreTo}</td>
        <td>${row.cableType}</td>
        <td>${row.cableColor}</td>
        <td>${row.note}</td>
      `;
      tbody.appendChild(tr);
    });
  });
}
loadData();
