import streamlit as st
import base64


def main():
    # Title of your app
    st.title("My Web Application")

    # Display HTML, CSS, and JS files
    # Load and display HTML file
    with open("index.html", "r") as f:
        index_html = f.read()
    st.markdown(index_html, unsafe_allow_html=True)

    # Load and display CSS via HTML injection
    with open("style.css", "r") as f:
        st.markdown(f"<style>{f.read()}</style>", unsafe_allow_html=True)

    # Optionally load and run JavaScript via HTML
    with open("basic.js", "r") as f:
        js_code = f.read()
    st.markdown(f"<script>{js_code}</script>", unsafe_allow_html=True)

    # Handle multimedia files - Example for video
    video_file = open("bg.mp4", "rb")
    video_bytes = video_file.read()
    st.video(video_bytes)

    # Display images
    with open("img1.png", "rb") as file:
        st.image(file.read(), caption="Image 1")

    # Embed other HTML files as needed
    # Example for adding another HTML like 'forex.html'
    with open("forex.html", "r") as f:
        forex_html = f.read()
    st.markdown(forex_html, unsafe_allow_html=True)


if __name__ == "__main__":
    main()
