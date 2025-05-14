# Git & GitHub Worksheet – Bhawna Kaliraman

---

## 📚 SECTION A: Conceptual Answers

Ans 1 :  
version control system helps in trying new ideas very safely without affecting the main work , it also helps in tracking changes ,it also helps different people to work on the same project ,we can also go back to the previous version if mistales are made in new versions.

Ans 2 :  
in centralized vcs there is one central server that holds code and everyone can works by connecting the same server while in distributed vcs everyone has the copy of code in their computers(history) as well as on the server ,it is more safer as the srever crashes everyone has copy of code in their computer.

Ans 3 :  
git is a distributed version control system that helps to track the changes in code and it is running on your computer while github is the online website where you can store your projects online 

Ans 4 :  
The staging area is like a waiting room for your changes before you save them in Git,The staging area lets you choose which changes to save (commit), so you have more control.

Ans 5 :  
The .git folder is a hidden folder that Git creates to track your project. It contains everything Git needs to manage versions, it contains Your file history,Your branches,Your commits,What’s staged and also shows the head (current working branch).

Ans 6 :  
Git branching lets you create a separate line of work in your project,and by default "master"is the branch of the project .command to create a new branch -"git branch newbranchname"and command for switching from one branch to another -"git checkout new".

Ans 7 :  
git reset helps to revert the head and shifts the head to previous commit whithout deleting that commit on the other hand git reset--hard shift the head to previous commit and also delets that commit.

Ans 8 :  
A squash merge combines all the commits from a branch into one single commit before adding it to the main branch,we can use it when we wnts to clean up the messey history and makes the main branch history simple and tidy .
Ans 9 :git rebase moves your branch to the latest version of another branch (usually main) and re-applies your changes on top of it.
---

## 💻 SECTION B: Hands-on Git Commands

### 🔹 Task 1 – Initialize a Repo and Track Changes

```bash
mkdir git-practice
cd git-practice
git init
echo "My first file" > bike.txt
echo "My second file" > car.txt
git add .
git commit -m "Added car and bike text files"
git status
git log
git log --oneline
```

### 🔹 Task 2 – Revert a Commit

```bash
echo "Hello from JS" > hello.txt
git add .
git commit -m "hello.txt added"
git log --oneline
git reset --hard HEAD~1
git log
```

**Explanation**: The commit that added `hello.txt` is permanently removed from the history.

### 🔹 Task 3 – GitHub Integration

```bash
git remote add origin https://github.com/Bhawnakaliraman/git-practice-repo
git branch -M main
git push -u origin main
```

---

## 🌿 SECTION C: Branching Practice

### 🔹 Task 4 – Feature Branch & Merge

```bash
git branch feature-login
git checkout feature-login
echo "<form>Login</form>" > login.html
git add login.html
git commit -m "Added login.html"
git checkout main
git merge feature-login
```

### 🔹 Task 5 – Squash Merge

```bash
git checkout -b feature-about
echo "Line 1" > about.txt && git add . && git commit -m "Add first line"
echo "Line 2" >> about.txt && git add . && git commit -m "Add second line"
echo "Line 3" >> about.txt && git add . && git commit -m "Add third line"
git checkout main
git merge --squash feature-about
git commit -m "Squashed 3 lines"
git log --oneline
```

---

## 🔁 SECTION D: Rebase Practice

### 🔹 Task 6 – Rebase Example

```bash
git checkout -b feature-rebase
echo "Feature commit" > feature.txt
git add . && git commit -m "Add feature commit"

git checkout main
echo "Main commit" > main.txt
git add . && git commit -m "Add main commit"

git checkout feature-rebase
git rebase main
git log --oneline
```

---

## 🌐 SECTION E: Open Source Contribution

**GitHub Fork Contribution:**  
Contributed to the open-source repo:  
🔗 [https://github.com/Bhawnakaliraman/Open-Source-Contribution](https://github.com/Bhawnakaliraman/Open-Source-Contribution)

Added details to `contributors.txt` with:  
- Name: **Bhawna**  
- Email: **kaliramanbhawna23@gmail.com**

---

✅ **Completed by:** Bhawna Kaliraman  
📅 **Date:**14 May 2025
