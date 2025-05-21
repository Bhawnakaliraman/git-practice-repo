function isEligibleToVote(age) {
  return age >= 18 ? "Eligible to vote" : "Not eligible to vote";
}
console.log(isEligibleToVote(20));