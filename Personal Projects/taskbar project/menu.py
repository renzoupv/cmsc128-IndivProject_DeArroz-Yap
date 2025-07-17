import os
from customtkinter import *
root = CTk()

def load_frame():
    root.title("Game Menu")
    root.geometry("1700x900")

def load_left_panel():
    left_panel = CTkFrame(master=root, fg_color="#131414")
    left_panel.place(relx=0, rely=0, relwidth=0.2, relheight=1)

def load_buttons():
    appBtn = CTkButton(master=root, text="Application", font=("Arial", 20))
    appBtn.place(relx=0.1, rely=0.25, anchor="center")

def main():
    load_frame()
    load_left_panel()
    load_buttons()
    root.mainloop()

if __name__ == "__main__":
    main()