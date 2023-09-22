import React, { useState, useMemo } from "react";
import ImagesData from "./ImagesData";
import "./Gallery.css";
import { closestCenter, DndContext } from "@dnd-kit/core";
import {
  useSortable,
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { arrayMove } from "@dnd-kit/sortable";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const MyGallery = () => {
  const [imagesData, setImagesData] = useState(ImagesData);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredImages = useMemo(() => {
    return imagesData.filter(
      (item) =>
        item.tags &&
        item.tags.some((tag) =>
          tag.toLowerCase().includes(searchTerm.toLowerCase())
        )
    );
  }, [searchTerm, imagesData]);

  const SortableUser = ({ item }) => {
    const { attributes, listeners, setNodeRef, transform, transition } =
      useSortable({ id: item.id });

    const style = {
      transition,
      transform: transform ? transform.toString() : null,
    };

    return (
      <img
        ref={setNodeRef}
        {...attributes}
        style={style}
        {...listeners}
        src={item.url}
        alt={item.title}
        className="image"
      />
    );
  };

  const onDragEnd = (event) => {
    const { active, over } = event;
    if (active.id === over.id) {
      return;
    }

    setImagesData((imagesData) => {
      const oldIndex = imagesData.findIndex((item) => item.id === active.id);
      const newIndex = imagesData.findIndex((item) => item.id === over.id);

      return arrayMove(imagesData, oldIndex, newIndex);
    });
  };

  return (
    <div className="gallery-container">
      <div className="search-option">
        <form onSubmit={(e) => e.preventDefault()} className="search-form">
          <input
            type="text"
            placeholder="Search by tag"
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <button type="submit">
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </form>
      </div>
      <div className="image-card">
        <DndContext collisionDetection={closestCenter} onDragEnd={onDragEnd}>
          <SortableContext
            items={filteredImages}
            strategy={verticalListSortingStrategy}
          >
            {filteredImages.map((item) => (
              <SortableUser key={item.id} item={item} />
            ))}
          </SortableContext>
        </DndContext>
      </div>
    </div>
  );
};

export default MyGallery;
