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

function $(id) {
  return document.getElementById(id);
}

function clearForm() {
  const ids = ["date", "number", "type", "fusions", "pixels", "coreFrom", "coreTo", "cableType", "cableColor", "splitter", "adapters", "note"];
  ids.forEach(id => $(id).value = "");
}

function submitForm() {
  const data = {
    date: $("date").value,
    number: $("number").value,
    type: $("type").value,
    fusions: $("fusions").value,
    pixels: $("pixels").value,
    coreFrom: $("coreFrom").value,
    coreTo: $("coreTo").value,
    cableType: $("cableType").value,
    cableColor: $("cableColor").value,
    note: $("note").value
  };

  if (!data.date || !data.number) {
    alert("تاریخ و شماره را وارد کنید");
    return;
  }

  db.ref("dailyTasks").push(data, (err) => {
    if (err) {
      alert("خطا در ثبت داده");
      console.error(err);
    } else {
      alert("اطلاعات با موفقیت ثبت شد");
      clearForm();
    }
  });
}
