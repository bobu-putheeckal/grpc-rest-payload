import http from "k6/http";
// import { sleep } from "k6";

export default function () {
  const url =
    "http://127.0.0.1:60766/rest/processObjects?saveObject1=true&saveObject2=true&saveObject3=true&saveObject4=true&saveObject5=true&saveObject6=true";
  // "http://192.168.64.19:31517/rest/processObjects";
  const payload = JSON.stringify({
    object1: {
      key1: "Duis dolore anim nisi eiusmod",
      key2: "dolore in",
      key3: "consectetur id",
      key4: "veniam mollit exercitation aliqua velit",
      key5: "do culpa adipisicing proident voluptate",
      key6: "in",
      key7: "pariatur incididunt",
      key8: "est",
    },
    object2: [
      {
        key1: "irure sint labore consectetur",
        key2: "in proident eu dolor Lorem",
        key3: "elit dolore minim",
        key4: "do laborum anim ea",
      },
      {
        key1: "consequat eiusmod adipisicing exercitation dolor",
        key2: "dolore labore incididunt",
        key3: "ut quis non reprehenderit in",
        key4: "quis tempor nisi laborum aliquip",
      },
      {
        key1: "Excepteur eiusmod reprehenderit ad esse",
        key2: "aliquip Duis et qui",
        key3: "proident dolor anim in",
        key4: "aliqua pariatur Ut",
      },
      {
        key1: "est sed officia",
        key2: "sunt labore nostrud mollit quis",
        key3: "sint anim ad et mollit",
        key4: "Ut reprehenderit",
      },
      {
        key1: "consequat eiusmod adipisicing exercitation dolor",
        key2: "dolore labore incididunt",
        key3: "ut quis non reprehenderit in",
        key4: "quis tempor nisi laborum aliquip",
      },
      {
        key1: "Excepteur eiusmod reprehenderit ad esse",
        key2: "aliquip Duis et qui",
        key3: "proident dolor anim in",
        key4: "aliqua pariatur Ut",
      },
      {
        key1: "consequat eiusmod adipisicing exercitation dolor",
        key2: "dolore labore incididunt",
        key3: "ut quis non reprehenderit in",
        key4: "quis tempor nisi laborum aliquip",
      },
      {
        key1: "Excepteur eiusmod reprehenderit ad esse",
        key2: "aliquip Duis et qui",
        key3: "proident dolor anim in",
        key4: "aliqua pariatur Ut",
      },
      {
        key1: "consequat eiusmod adipisicing exercitation dolor",
        key2: "dolore labore incididunt",
        key3: "ut quis non reprehenderit in",
        key4: "quis tempor nisi laborum aliquip",
      },
      {
        key1: "Excepteur eiusmod reprehenderit ad esse",
        key2: "aliquip Duis et qui",
        key3: "proident dolor anim in",
        key4: "aliqua pariatur Ut",
      },
      {
        key1: "consequat eiusmod adipisicing exercitation dolor",
        key2: "dolore labore incididunt",
        key3: "ut quis non reprehenderit in",
        key4: "quis tempor nisi laborum aliquip",
      },
      {
        key1: "Excepteur eiusmod reprehenderit ad esse",
        key2: "aliquip Duis et qui",
        key3: "proident dolor anim in",
        key4: "aliqua pariatur Ut",
      },
    ],
    object3: {
      key1: "tempor ea",
      key2: "nisi aliqua eu velit ad",
      key3: "Excepteur tempor exercitation mollit in",
      key4: "cupidatat sint quis",
      key5: "eu anim aute laborum proident",
      key6: "dolore mollit",
      key7: "aliquip adipisicing",
      key8: "fugiat quis commodo",
    },
    object4: {
      key1: "ea",
      key2: "minim in dolor Duis",
      key3: "tempor",
      key4: "ut id",
      key5: "laboris",
      key6: "enim ipsum in minim Excepteur",
      key7: "est tempor laborum aute",
      key8: "exercitation ex amet qui nulla",
    },
    object5: {
      key1: "magna",
      key2: "culpa",
      key3: "in ipsum nostrud",
      key4: "ut dolor aliquip deserunt",
      key5: "nostrud adipisicing Lorem",
      key6: "id qui",
      key7: "sunt Duis",
      key8: "amet eu veniam cupidatat",
    },
    object6: {
      key1: "occaecat velit ut tempor ut",
      key2: "id fugiat",
      key3: "pariatur",
      key4: "est cupidatat pariatur tempor",
      key5: "dolor qui in",
      key6: "nisi ipsum",
      key7: "tempor",
      key8: "elit",
    },
  });

  const params = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  http.post(url, payload, params);
  //   sleep(1);
}
