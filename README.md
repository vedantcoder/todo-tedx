# ✅ TEDx BITS Hyderabad TODO App

A simple and responsive TODO web application built as part of the **TEDxBITSHyderabad Tech Team** induction.  
The app allows users to **add, view, edit, and delete tasks** with an intuitive UI and smooth user experience.

---

## 🚀 Live Demo

👉 [**Deployed App (to be added)**](#) 

---

## 📌 Features

- ✅ Built with **Next.js App Router**
- ✅ Fully responsive using **Tailwind CSS** and **DaisyUI**
- ✅ Written in **TypeScript** for type safety
- ✅ Uses **React Context API** for state management
- ✅ Supports:
  - 📥 Adding new TODOs (`/add`)
  - 👀 Viewing all TODOs (`/view`)
  - ✏️ Editing and 🗑️ Deleting TODOs (`/edit`)
- ✅ Uses **Lucide Icons** for consistent, minimal UI
- ✅ Integrated **react-hot-toast** for toast notifications
- ✅ Clean, modular folder structure
- ✅ Light-only theme with customised styling
- ✅ TODOs include:
  - Title
  - Description
  - Optional Due Date
  - Created Date

---

## 🛠️ Tech Stack

| Tool           | Purpose                          |
|----------------|----------------------------------|
| [Next.js 14+](https://nextjs.org/) | Framework for React with routing |
| [Tailwind CSS](https://tailwindcss.com/) | Utility-first CSS framework |
| [DaisyUI](https://daisyui.com/) | Tailwind UI component library |
| [TypeScript](https://www.typescriptlang.org/) | Typed JavaScript |
| [React Context API](https://reactjs.org/docs/context.html) | Global state management |
| [Lucide Icons](https://lucide.dev/) | Modern icon pack |
| [React Hot Toast](https://react-hot-toast.com/) | Toast notifications |

---

## 🗂️ Folder Structure

```
src/
├── app/              # App Router Pages (add, view, edit, layout)
├── components/       
│   └── UI/           # Navbar, Footer, Button, etc.
│   └── icons/       
├── context/
│   └── TodoContext.tsx  # Global state management
├── types/
│   └── Todo.ts        # Task type definition
├── styles/
│   └── globals.css    # Tailwind + DaisyUI setup
```

---

## 🧪 How to Run Locally

> Make sure you have Node.js (v18+) and npm/yarn installed.

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/todo-tedx.git
cd todo-tedx
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
```

### 3. Run the Dev Server

```bash
npm run dev
# or
yarn dev
```

> App will be available at `http://localhost:3000`

---

## 🎯 Routes Summary

| Route     | Purpose               |
|-----------|------------------------|
| `/`       | Home / Landing Page    |
| `/add`    | Add new TODO           |
| `/view`   | View all TODOs         |
| `/edit?id=TODO_ID` | Edit specific TODO |

---

## ✨ Bonus Features Used

- 🧠 **React Context API** instead of Redux or Zustand
- 🎨 **Lucide Icons** for clean UI
- 🍞 **react-hot-toast** for real-time feedback (add, update, delete)
- 🧱 **Modular folder structure** with reusable UI components
- 🌗 **Light theme enforced**, TEDx-themed highlights

---

## 🧑‍💻 Author

Built with 💙 by **Vedant Nichal**  
📫 [GitHub](https://github.com/vedantcoder)

---

## 📃 License

This project is open-source and free to use under the [MIT License](https://opensource.org/licenses/MIT).
