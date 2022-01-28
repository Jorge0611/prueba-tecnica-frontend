const contentType = "application/json";

export async function postData(api, form) {
  try {
    const res = await fetch(api, {
      method: "POST",
      headers: {
        Accept: contentType,
        "Content-Type": contentType,
      },
      body: JSON.stringify(form),
    });

    // Throw error with status code in case Fetch API req failed
    if (!res.ok) {
      console.error(res.status.toString());
    }
  } catch (error) {
    console.error(error);
  }
}

/* The PUT method edits an existing entry in the mongodb database. */
export async function putData(api, form) {
  try {
    const res = await fetch(api, {
      method: "PUT",
      headers: {
        Accept: contentType,
        "Content-Type": contentType,
      },
      body: JSON.stringify(form),
    });

    // Throw error with status code in case Fetch API req failed
    if (!res.ok) {
      console.error(res.status.toString());
    }
    await res.json();
  } catch (error) {
    console.error(error);
  }
}

export async function deleteData(api) {
  try {
    const res = await fetch(api, {
      method: "DELETE",
      headers: {
        Accept: contentType,
        "Content-Type": contentType,
      },
    });

    // Throw error with status code in case Fetch API req failed
    if (!res.ok) {
      console.error(res.status.toString());
    }
  } catch (error) {
    console.error(error);
  }
}

export const fetcher = (url) => fetch(url).then((r) => r.json());

export function handleDelete(api) {
  if (window.confirm("Estas seguro que quieres eliminar?")) {
    deleteData(api);
  }
}
