

exports.blogPosting = ({id, 
  datePublished,
  mainEntityOfPage,
  headline,
  publisher,
  author,
  image}) => {
  return {
    "@type": "BlogPosting",
    "@id": id,
    datePublished,
    mainEntityOfPage,
    headline,
    publisher,
    author,
    image,
  }
}

exports.musicComposition = ({id, composer, datePublished, mainEntityOfPage, name}) => {
  return {
    "@type": "MusicComposition",
    "@id": id,
    composer,
    datePublished,
    mainEntityOfPage,
    name,
  }
}

exports.musicRecording = ({id, byArtist, datePublished, mainEntityOfPage, name, audio, recordingOf}) => {
  return {
    "@type": "MusicRecording",
    "@id": id,
    byArtist,
    datePublished,
    mainEntityOfPage,
    name,
    audio,
    recordingOf,
  }
}

exports.musicGroup = ({id, name}) => {
  return {
    "@type": "MusicGroup",
    "@id": id,
    name
  }
}

exports.imageObject = ({name, height, width, url}) => {
  return {
    "@type": "ImageObject",
    height,
    width,
    url
  }
}

exports.audioObject = ({contentUrl}) => {
  return {
    "@type": "AudioObject",
    contentUrl
  }
}

exports.breadcrumbList = ({itemListElement}) => {
  return {
    "@type": "BreadcrumbList",
    itemListElement
  }
}

exports.person = ({name, url}) => {
  return {
    "@type": "Person",
    name,
    url
  }
}

exports.organization = ({name, url}) => {
  return {
    "@type": "Organization",
    name,
    url
  }
}

exports.listItem = ({position, name, item}) => {
  return {
    "@type": "ListItem",
    position,
    name,
    item
  }
}

exports.graphWrapper = (graph) => {
  return {
    "@context": "https://schema.org",
    "@graph": graph
  }
}

exports.collection = ({id, hasPart, description, producer}) => {
  return {
    "@type": "Collection",
    "@id": id,
    hasPart,
    description,
    producer
  }
}

exports.blog = ({id, author, mainEntityOfPage, blogPost, name, publisher}) => {
  return {
    "@type": "Blog",
    "@id": id,
    author,
    mainEntityOfPage,
    blogPost,
    name,
    publisher
  }
}