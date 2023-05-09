function updateRiskScore(input) {
 let row = input.parentNode.parentNode;
 let rating = input.value;
 let riskScore;
  if (row.rowIndex === 1) {
 if (rating < 120 || rating > 180) {
   riskScore = 0;
  } else if (rating >= 120 && rating < 130) {
   riskScore = 0;
 } else if (rating >= 130 && rating < 145) {
  riskScore = 1;
} else if (rating >= 145 && rating < 150) {
   riskScore = 2;
  } else if (rating >= 150 && rating <= 180) {
    riskScore = 3;}
row.querySelector(".riskScore").textContent = riskScore;
row.querySelector(".progress-bar").style.width = (riskScore / 3 * 100) + "%";}

if (row.rowIndex === 2) {
 if (rating < 200 || rating > 240) {
  riskScore = 0;
} else if (rating >= 200 && rating < 215) {
  riskScore = 1;
  } else if (rating >= 215 && rating < 235) {
  riskScore = 2;
} else if (rating >= 235) {
    riskScore = 3;}
  row.querySelector(".riskScore").textContent = riskScore;
 row.querySelector(".progress-bar").style.width = (riskScore / 3 * 100) + "%";
}

if (row.rowIndex === 3) {
   if (rating < 99 || rating > 126) {
       riskScore = 0;
   } else if (rating >= 99 && rating < 110) {
       riskScore = 1;
   } else if (rating >= 110 && rating < 120) {
       riskScore = 2;
   } else if (rating >= 120) {
       riskScore = 3;
   }

   row.querySelector(".riskScore").textContent = riskScore;
   row.querySelector(".progress-bar").style.width = (riskScore / 3 * 100) + "%";
}

if (row.rowIndex === 4) {
   if (rating ===" 0") {
       riskScore = 0;
   } else if (rating === "1") {
       riskScore = 1;
   } else if (rating === "2") {
       riskScore = 2;
   }

   row.querySelector(".riskScore").textContent = riskScore;
   row.querySelector(".progress-bar").style.width = (riskScore / 2 * 100) + "%";
}

if (row.rowIndex === 5) {
  if (rating < 15 || rating > 30) {
      riskScore = 0;
  } else if (rating >= 18 && rating <= 25) {
      riskScore = 0;
  } else if (rating < 18 || rating > 25) {
      riskScore = 2;
  }

  row.querySelector(".riskScore").textContent = riskScore;
  row.querySelector(".progress-bar").style.width = (riskScore / 2 * 100) + "%";
}

if (row.rowIndex === 6) {
   if (rating === "0") {
       riskScore = 0;
   } else if (rating === "2") {
       riskScore = 2;
   }

   row.querySelector(".riskScore").textContent = riskScore;
   row.querySelector(".progress-bar").style.width = (riskScore / 2 * 100) + "%";
}

if (row.rowIndex === 7) {
   if (rating === "0") {
       riskScore = 0;
   } else if (rating === "1") {
       riskScore = 1;
   }

   row.querySelector(".riskScore").textContent = riskScore;
   row.querySelector(".progress-bar").style.width = (riskScore / 1 * 100) + "%";
}

if (row.rowIndex === 8) {
   if (rating < 1 || rating > 500) {
       riskScore = 0;
   } else if (rating >= 150  ) {
       riskScore = 0;
   } else if (rating < 150) {
       riskScore = 1;
   }

   row.querySelector(".riskScore").textContent = riskScore;
   row.querySelector(".progress-bar").style.width = (riskScore / 1 * 100) + "%";
}

if (row.rowIndex === 9) {
   if (rating < 100 || rating > 500) {
       riskScore = 10;
   } else if (rating >= 100 && rating <= 250) {
       riskScore = 0;
   } else if (rating > 250) {
       riskScore = 1;
   }

   row.querySelector(".riskScore").textContent = riskScore;
   row.querySelector(".progress-bar").style.width = (riskScore / 1 * 100) + "%";
}

  }
