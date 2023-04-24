import React, { useEffect } from "react";
import { useState } from "react";
import {
  Modal,
  Button,
  Label,
  TextInput,
  Checkbox,
  Textarea,
    FileInput,
} from "flowbite-react";
import { useSelector } from "react-redux";
export default function ArticleModal({ showModal }) {
  const [show, setShow] = useState(showModal);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const { updatingArticle } = useSelector((state) => state.articles);
  useEffect(() => {
    setShow(showModal);
  }, [showModal, updatingArticle]);
  const onClose = () => {
    setShow(false);
  };
  if (updatingArticle != null) {
    //console.log(updatingArticle.clubs);
    return (
      <React.Fragment>
        <Modal show={show} size="4xl" popup={true} onClose={onClose}>
          <Modal.Header />
          <Modal.Body className="">
            <div className="space-y-6">
              <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                update article
              </h3>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="clubs" value="clubs" />
                </div>
                <div className="flex">
                  {updatingArticle.clubs.map((club, index) => (
                    <span
                      style={{ 
                        backgroundColor: club.primary_color,
                        color: club.secondary_color
                    }}
                      key={index}
                      className={` text-gray-400 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300`}
                    >
                      {club.name}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="title" value="title" />
                </div>
                <TextInput
                  id="title"
                  placeholder="title"
                  value={updatingArticle.title}
                  required={true}
                  onChange={(e) => {
                    setTitle(e.target.value);
                  }}
                />
              </div>

              <div id="textarea">
                <div className="mb-2 block">
                  <Label htmlFor="content" value="content" />
                </div>
                <Textarea
                  value={updatingArticle.content}
                  id="content"
                  placeholder="Leave a comment..."
                  required={true}
                  rows={4}
                  onChange={(e) => {
                    setContent(e.target.value);
                  }}
                />
              </div>

              <div id="fileUpload">
                <div className="mb-2 block">
                  <Label htmlFor="file" value="Upload file" />
                </div>
                <FileInput
                  id="file"
                  helperText="A profile picture is useful to confirm your are logged into your account"
                />
              </div>

              <div className="w-full">
                <Button>save</Button>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </React.Fragment>
    );
  }
}
