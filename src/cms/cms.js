import CMS from "netlify-cms-app";
import uploadcare from "netlify-cms-media-library-uploadcare";
import cloudinary from "netlify-cms-media-library-cloudinary";

import AboutPagePreview from "./preview-templates/AboutPagePreview";
import ArticlePagePreview from "./preview-templates/ArticlePagePreview";
import IndexPagePreview from "./preview-templates/IndexPagePreview";
import NavigationPreview from "./preview-templates/NavigationPreview";

CMS.registerMediaLibrary(uploadcare);
CMS.registerMediaLibrary(cloudinary);

CMS.registerPreviewTemplate("index", IndexPagePreview);
CMS.registerPreviewTemplate("about", AboutPagePreview);
CMS.registerPreviewTemplate("article", ArticlePagePreview);
CMS.registerPreviewTemplate("navigation", NavigationPreview);
